import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export const LATEST_RECALL = 'https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en';
export const BASE_URL = 'https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/';
export interface HealthRecallContent {
  recallId?: string;
  title: string;
  category?: string[];
  categoryDescription?: string;
  date_published?: number;
  url?: string;
  department?: string;
  date?: string;
}

export interface HealthRecall {
  ALL: HealthRecallContent[];
  FOOD: HealthRecallContent[];
  VEHICLE: HealthRecallContent[];
  HEALTH: HealthRecallContent[];
  CPS: HealthRecallContent[];
}

export interface HealthRecallView {
  ALL: HealthRecallContent[];
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

  public getLatestRecall15Service(): Observable<HealthRecallView> {
    return this.http.get<HealthRecallView>(LATEST_RECALL);
  }

  public getLastHealthRecall(): Observable<HealthRecall> {
    return this.http.get<HealthRecall>(LATEST_RECALL);
  }

  public getRecallHealthDetail(recallID: string): Observable<HealthRecallDetail> {
    return this.http.get<HealthRecallDetail>(`${BASE_URL}${recallID}/en`);
  }

  public searchRecall({...args}): Observable<HealthRecallContent> {
    let params = new HttpParams();
    params = params.append('search', args.search);
    params = params.append('cat', args.cat);
    params = params.append('lan', args.lang);
    params = params.append('off', args.offset);
    return this.http.get<HealthRecallContent>(`${BASE_URL}search`, {params});
  }
}
