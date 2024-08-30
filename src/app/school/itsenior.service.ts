import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITSenior } from './itsenior';

@Injectable({
  providedIn: 'root'
})
export class ITSeniorService {
  private http = inject(HttpClient);
  
  public getAllAssignments(): Observable<ITSenior[]> {
    return this.http.get<ITSenior[]>('assets/combined_data.json');
  }
}


