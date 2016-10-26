import { Injectable } from '@angular/core';
import { Training } from "./training.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class TrainingService {

  constructor(private http: Http) { }

  getAll(): Observable<Training[]> {
    return this.http.get("/api/training")
      .map(response => response.json().data )
      .map(data => data as Training[]);
  }

  getById(id: number): Observable<Training> {
    return this.http.get(`/api/training/${id}`)
      .map(response => response.json().data )
      .map(data => data as Training);
  }

}
