import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { TrainingService } from './app/trainings/training.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TrainingService]);
