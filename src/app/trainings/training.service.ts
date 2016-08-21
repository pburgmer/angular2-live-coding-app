import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Training } from './training.model';
import { TRAININGS } from './training.mock';

@Injectable()
export class TrainingService {

  subject = new ReplaySubject<Training[]>(1);

  constructor() {
    this.subject.next(TRAININGS);
   }

  getAll(): Observable<Training[]> {
    return this.subject.asObservable();
  }

}
