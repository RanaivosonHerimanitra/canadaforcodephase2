import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export const LATEST_RECALL = 'https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en';

export interface HealthRecallContent {
  recallId: string;
  title: string;
  category: string[];
  date_publish: Date;
  url: string;
}

export interface HealthRecall {
  ALL: HealthRecallContent[];
  FOOD: HealthRecallContent[];
  VEHICLE: HealthRecallContent[];
  HEALTH: HealthRecallContent[];
  CPS: HealthRecallContent[];
}
@Injectable({
  providedIn: 'root'
})
export class LatestRecallService {
  constructor(private http: HttpClient) { }

  /*public getBinarySearchResult(query: BinarySearchQuery) {
    return this.http.post<BinarySearchResult>(LATEST_RECALL, query);
  }*/

  public getLastHealthRecall(): Observable<HealthRecall> {
    return this.http.get<HealthRecall>(LATEST_RECALL);
  }
}
