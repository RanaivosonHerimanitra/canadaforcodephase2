import { HealthRecallContent, HealthRecall, LatestRecallService } from './../../services/latest-recall.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-last-recall',
  templateUrl: './last-recall.component.html',
  styleUrls: ['./last-recall.component.sass']
})
export class LastRecallComponent implements OnInit {
  public lastRecall$: Observable<HealthRecall>;
  public data: HealthRecall;
  public isLoading = false;
  public readonly categories = ['ALL', 'FOOD', 'HEALTH', 'CPS', 'VEHICLE'];
  constructor(private recallService: LatestRecallService, private router: Router) { }

  ngOnInit(): void {
    this.lastRecall$ = this.recallService.getLastHealthRecall();
  }

  getLastRecall(): void {
    this.isLoading = true;
    this.lastRecall$.subscribe({
      // simulation of a delay:
      next: (data) => setTimeout(() => {
        this.data = data;
        this.isLoading = false;
      }, 1000),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('completed'),
    });
  }

  getTopMostRecent(top: number): void {
    this.router.navigate(['top-most-recall', 3]);
  }
}
