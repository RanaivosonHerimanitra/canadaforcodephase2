import { HealthRecallContent, HealthRecall, LatestRecallService } from './../../services/latest-recall.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-last-recall',
  templateUrl: './last-recall.component.html',
  styleUrls: ['./last-recall.component.sass']
})
export class LastRecallComponent implements OnInit {
  public lastRecall$: Observable<HealthRecall>;
  public data: HealthRecall;
  constructor(private recallService: LatestRecallService) { }

  ngOnInit(): void {
    this.lastRecall$ = this.recallService.getLastHealthRecall();
  }

  getLastRecall(): void {
    this.lastRecall$.subscribe(data => {
      this.data = data;
    });
  }

  // search for a specific item from the list
  // usage of debounce
  // code error NOT FOUND
  // use shared directory
  // usage gif loader during subscribe
}
