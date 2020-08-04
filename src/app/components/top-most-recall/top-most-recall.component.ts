import { HealthRecallContent } from './../../services/latest-recall.service';
import { UnixToDate } from './../../shared/UnixToDate';
import { Component, OnInit } from '@angular/core';
import { HealthRecall, LatestRecallService } from 'src/app/services/latest-recall.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-most-recall',
  templateUrl: './top-most-recall.component.html',
  styleUrls: ['./top-most-recall.component.sass']
})
export class TopMostRecallComponent implements OnInit {
  public lastRecall$: Observable<HealthRecall>;
  public data: HealthRecall;
  public isLoading = false;
  public readonly categories = ['ALL', 'FOOD', 'HEALTH', 'CPS', 'VEHICLE'];
  public top: number;

  constructor(private recallService: LatestRecallService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lastRecall$ = this.recallService.getLastHealthRecall();
    this.top = Number(this.route.snapshot.paramMap.get('id'));
    this.lastRecall$.subscribe({
      next: ({results}: any) => {
        this.data = {
          // tslint:disable-next-line: max-line-length
          CPS: results.CPS.sort((a: HealthRecallContent, b: HealthRecallContent) => -a.date_published + b.date_published).splice(0, this.top),
          // tslint:disable-next-line: max-line-length
          ALL: results.ALL.sort((a: HealthRecallContent, b: HealthRecallContent) => -a.date_published + b.date_published).splice(0, this.top),
          // tslint:disable-next-line: max-line-length
          FOOD: results.FOOD.sort((a: HealthRecallContent, b: HealthRecallContent) => -a.date_published + b.date_published).splice(0, this.top),
          // tslint:disable-next-line: max-line-length
          HEALTH: results.HEALTH.sort((a: HealthRecallContent, b: HealthRecallContent) => -a.date_published + b.date_published).splice(0, this.top),
          // tslint:disable-next-line: max-line-length
          VEHICLE: results.VEHICLE.sort((a: HealthRecallContent, b: HealthRecallContent) => -a.date_published + b.date_published).splice(0, this.top)
        };
        this.categories.forEach(category => {
          this.data[category].forEach((element: HealthRecallContent) => {
            element.date = UnixToDate(element.date_published, '/');
            return element;
          });
        });
        this.isLoading = false;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('completed'),
    });
  }
}
