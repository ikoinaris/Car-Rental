import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locationsUrl: string;

  constructor(private http: HttpClient) {
    this.locationsUrl = "http://localhost:8080/car-rental/locations";
   }

   public findAll(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationsUrl);
  }
}
