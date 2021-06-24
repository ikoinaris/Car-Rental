import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableCars } from '../models/available-cars';

@Injectable({
  providedIn: 'root'
})
export class AvailableCarsService {

  private availableCarsUrl: string;

  constructor(private http: HttpClient) {
    this.availableCarsUrl = "http://localhost:8080/car-rental/available-cars";
  }

  public findAvailableCars(params: HttpParams) : Observable<AvailableCars[]> {
    return this.http.get<AvailableCars[]>(this.availableCarsUrl, {params: params});
  }
}
