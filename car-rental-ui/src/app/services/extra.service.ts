import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extra } from './extra';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  private extrasUrl: string;

  constructor(private http: HttpClient) {
    this.extrasUrl = "http://localhost:8080/car-rental/extras";
   }

   public findAll(): Observable<Extra[]> {
    return this.http.get<Extra[]>(this.extrasUrl);
  }
}
