import { LatestRecallService, HealthRecall, HealthRecallContent } from 'src/app/services/latest-recall.service';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {PageEvent, MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-recall-search',
  templateUrl: './recall-search.component.html',
  styleUrls: ['./recall-search.component.sass']
})
export class RecallSearchComponent implements OnInit {
  public searchKeyWord: string;
  public selectedCategory: string;
  public selectedLang: string;
  public isLoading = false;
 // MatPaginator Inputs
  length = 0;
  pageSize = 0;
  pageOffset = 0;
  public pageSizeOptions: number[];
  // MatPaginator Output
  pageEvent: PageEvent;
  private currentPage = 0;
  // should be interfaced
  public searchParams = {search: '', lang: 'en', cat: '', offset: 0};
  public searchResults$: Observable<HealthRecallContent>;
  public searchResutData: HealthRecallContent[] = [];
  public searchColumns = ['recallId', 'title', 'department', 'date_published', 'pageurl'];
  public categories: any[] = [{label: 'Food', value: '1'}, {label: 'Vehicles', value: '2'}, {label: 'Health Products', value: '3'}, {label: 'Consumer Products', value: '4'}];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recallService: LatestRecallService) {

  }

  ngOnInit(): void {
  }

  doSearch(): void {
    this.isLoading = true;
    if (this.pageEvent) { this.searchParams.offset = this.pageOffset; }
    console.log(this.pageEvent);
    this.recallService.searchRecall(this.searchParams).subscribe({
        next: (data) => {
          // tslint:disable-next-line: no-string-literal
          this.searchResutData = data['results'];
          // tslint:disable-next-line: no-string-literal
          this.length = data['results_count'];
          this.pageSize =  this.searchResutData.length;
          this.pageOffset += this.pageSize;
          // tslint:disable-next-line: no-string-literal
          this.pageSizeOptions = [...Array(data['results_count']).keys()];
          this.isLoading = false;
         },
        error: (err) => console.log(err),
        complete: () => console.log('completed!')
      });
  }
}
