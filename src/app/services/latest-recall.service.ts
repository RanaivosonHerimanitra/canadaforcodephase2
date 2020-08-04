import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export const LATEST_RECALL = 'https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en';
export const BASE_URL = 'https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/';
export interface HealthRecallContent {
  recallId: string;
  title: string;
  category: string[];
  date_published: number;
  url: string;
  date?: string;
}

export interface HealthRecall {
  ALL: HealthRecallContent[];
  FOOD: HealthRecallContent[];
  VEHICLE: HealthRecallContent[];
  HEALTH: HealthRecallContent[];
  CPS: HealthRecallContent[];
}

export interface Panel {
  panelName: string;
  title: string;
  text: string;
}

export interface HealthRecallDetail {
  url: string;
  recallId: string;
  title: string;
  start_date: number;
  date_published: number;
  date?: string;
  debut?: string;
  category: string[];
  panels: Panel[];
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

  public getRecallHealthDetail(recallID: string): Observable<HealthRecallDetail> {
    return this.http.get<HealthRecallDetail>(`${BASE_URL}${recallID}/en`);
  }
}
