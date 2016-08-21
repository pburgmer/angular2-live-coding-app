import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Training } from './training.model';
import { TRAININGS } from './training.mock';
import { Http, Response } from '@angular/http';


@Injectable()
export class TrainingService {

  constructor(private http: Http) {}

  getAll(): Observable<Training[]> {
    return this.http.get('api/training')
      .map(deserialise)
      .do(stringsToDate);
  }

}

function deserialise(response: Response) {
  return response.json().data;
}

function stringsToDate(data: any[]) {
  data.map(stringToDate);
}

function stringToDate(data: any) {
  data.nextRun = new Date(data.nextRun);
}
