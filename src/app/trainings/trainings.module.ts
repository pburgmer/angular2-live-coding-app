import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingService } from "./training.service";
import { HttpModule } from "@angular/http";
import { TrainingListRouteComponent } from './training-list-route/training-list-route.component';
import { TrainingDetailsRouteComponent } from './training-details-route/training-details-route.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [TrainingListComponent, TrainingDetailsComponent, TrainingListRouteComponent, TrainingDetailsRouteComponent],
  exports: [TrainingListRouteComponent, TrainingDetailsRouteComponent],
  providers: [
    { provide: TrainingService, useClass: TrainingService}
  ]
})
export class TrainingsModule { }
