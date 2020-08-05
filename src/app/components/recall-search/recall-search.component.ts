import { LatestRecallService, HealthRecall, HealthRecallContent } from 'src/app/services/latest-recall.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

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
  public pageSizeOptions: number[];
  // MatPaginator Output
  pageEvent: PageEvent;
  // should be interfaced
  public searchParams = {search: '', lang: 'en', cat: ''};
  public searchResults$: Observable<HealthRecallContent>;
  public searchResutData: HealthRecallContent[];
  public searchColumns = ['recallId'];
  public categories: any[] = [{label: 'Food', value: '1'}, {label: 'Vehicles', value: '2'}, {label: 'Health Products', value: '3'}, {label: 'Consumer Products', value: '4'}];

  constructor(private recallService: LatestRecallService) {

  }

  ngOnInit(): void {
  }

  doSearch(): void {
   console.log(this.searchParams);
   this.isLoading = true;
   this.recallService.searchRecall(this.searchParams.search, this.searchParams.cat, this.searchParams.lang).subscribe({
     next: (data) => {
       this.searchResutData = data['results'];
       this.length = data['results_count'];
       this.pageSize =  this.searchResutData.length;
       this.pageSizeOptions = [...Array(data['results_count']).keys()];
       this.isLoading = false;
      },
     error: (err) => console.log(err),
     complete: () => console.log('completed!')
   });
  }
}
