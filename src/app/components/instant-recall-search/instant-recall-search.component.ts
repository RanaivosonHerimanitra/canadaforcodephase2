import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { HealthRecallContent, LatestRecallService } from 'src/app/services/latest-recall.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-instant-recall-search',
  templateUrl: './instant-recall-search.component.html',
  styleUrls: ['./instant-recall-search.component.sass']
})
export class InstantRecallSearchComponent implements OnInit {
  public searchKeyWord: string;
  public isLoading = false;
  pageEvent: PageEvent;
  length = 10;
  pageSize = 10;
  public searchError: any;
  public searchParams = {search: '', lang: 'en', cat: '', offset: 0};
  public searchResults$: Observable<HealthRecallContent>;
  public searchResutData: MatTableDataSource<HealthRecallContent>;
  public searchColumns = ['recallId', 'title', 'department', 'date_published', 'pageurl'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recallService: LatestRecallService) {
  }

  doSearch(): void {
    setTimeout(() => {
      this.doInstantSearch();
    }, 1000);
  }

  doInstantSearch(): void {
    this.isLoading = true;
    if (this.pageEvent) {
      // we are stepping back
      if (this.pageEvent.previousPageIndex && this.pageEvent.pageIndex < this.pageEvent.previousPageIndex) {
        this.searchParams.offset -= 1;
      } else {
        this.searchParams.offset += 1;
      }
    }
    this.recallService.searchRecall(this.searchParams).subscribe({
        next: (data) => {
          this.searchError = undefined;
          // tslint:disable-next-line: no-string-literal
          this.searchResutData = new MatTableDataSource(data['results']);
          // this.searchResutData.paginator = this.paginator;
          // tslint:disable-next-line: no-string-literal
          this.length = data['results_count'];
          this.pageSize =  this.searchResutData.data.length;
        },
        error: (err) => {
          this.searchResutData = undefined;
          this.isLoading = false;
          this.searchError = err;
        },
        complete: () => this.isLoading = false
    });
  }

  ngOnInit(): void {
  }

}
