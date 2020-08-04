import { LatestRecallService, HealthRecall } from 'src/app/services/latest-recall.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recall-search',
  templateUrl: './recall-search.component.html',
  styleUrls: ['./recall-search.component.sass']
})
export class RecallSearchComponent implements OnInit {
  public searchKeyWord: string;
  public selectedCategory: string;
  public selectedLang: string;
  // should be interfaced
  public searchParams = {search: '', lang: 'en', cat: ''};
  public searchResults$: Observable<HealthRecall>;
  public categories: any[] = [{label: 'Food', value: '1'}, {label: 'Vehicles', value: '2'}, {label: 'Health Products', value: '3'}, {label: 'Consumer Products', value: '4'}];
  constructor(private recallService: LatestRecallService) {

  }

  ngOnInit(): void {
  }

  doSearch(): void {
   console.log(this.searchParams);
   // validate searchParams
   // launch search
   this.recallService.searchRecall(this.searchParams.search,this.searchParams.cat, this.searchParams.lang).subscribe({
     next: (data) => console.log(data),
     error: (err) => console.log(err),
     complete: () => console.log('completed!')
   });
  }
}
