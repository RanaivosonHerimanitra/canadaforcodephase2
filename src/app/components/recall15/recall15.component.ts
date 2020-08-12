import { element } from 'protractor';
import { HealthRecallView, LatestRecallService } from './../../services/latest-recall.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-recall15',
  templateUrl: './recall15.component.html',
  styleUrls: ['./recall15.component.sass']
})
export class Recall15Component implements OnInit {
  // public recall15data$: Observable<HealthRecallView>;
  public recall15data: HealthRecallView;
  public displayedColumns = ['categoryDescription', 'title'];
  public readonly categories = {1: 'Food', 2: 'Vehicles', 3: 'Health Products', 4: 'ConsumerProducts'};
  constructor(private recallService: LatestRecallService) { }

  ngOnInit(): void {
    this.recallService.getLatestRecall15Service().subscribe({
      // simulation of a delay:
      next: (data) => {
        // tslint:disable-next-line: no-string-literal
        this.recall15data = data['results'];
        this.recall15data.ALL.map(content => {
          content.categoryDescription = this.humanizeCategory(content.category);
        });
      },
      error: err => console.error('error ' + err),
      complete: () => console.log('completed'),
    });
  }

  humanizeCategory(category: string[]): string {
    let categoryString = '';
    category.forEach(element => {
      // tslint:disable-next-line: radix
      const categoryNumber = parseInt(element);
      // tslint:disable-next-line: curly
      if (categoryNumber && categoryNumber >= 1 && categoryNumber <= 4) categoryString += this.categories[categoryNumber];
    });
    return categoryString;
  }
}
