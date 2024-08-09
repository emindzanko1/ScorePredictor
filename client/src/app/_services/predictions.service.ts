import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Prediction } from '../_models/prediction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:5001/api/'; 

  getPrediction(userId: number, fixtureId: number): Observable<Prediction> {
    return this.http.get<Prediction>(`${this.baseUrl}predictions/${userId}/${fixtureId}`);
  }

  submitPrediction(prediction: Prediction): Observable<any> {
    return this.http.post(this.baseUrl + 'predictions', prediction);
  }
}
