import { UnixToDate } from './../../shared/UnixToDate';
import { ActivatedRoute } from '@angular/router';
import { LatestRecallService } from 'src/app/services/latest-recall.service';
import { HealthRecallDetail, Panel } from './../../services/latest-recall.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-last-recall-details',
  templateUrl: './last-recall-details.component.html',
  styleUrls: ['./last-recall-details.component.sass']
})
export class LastRecallDetailsComponent implements OnInit {
  public lastRecall$: Observable<HealthRecallDetail>;
  public data: HealthRecallDetail;
  private recallID: string;
  public panelColumns: string[] = ['panelName', 'title', 'text'];
  public panelDataSource: Panel[];
  constructor(private recallService: LatestRecallService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recallID = this.route.snapshot.paramMap.get('recallID');
    this.recallService.getRecallHealthDetail(this.recallID).subscribe({
      next: (data) => {
        data.date = UnixToDate(data.date_published, ' ');
        data.debut = UnixToDate(data.start_date, ' ');
        data.panels.forEach(panel => panel.text = panel.text.replace(/(<([^>]+)>)/gi, ' '));
        this.panelDataSource = data.panels;
        this.data = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    });
  }
}
