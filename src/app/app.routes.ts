import { Routes } from "@angular/router";
import { TrainingListComponent } from "./trainings/training-list/training-list.component";
import { TrainingListRouteComponent } from "./trainings/training-list-route/training-list-route.component";
import { TrainingDetailsRouteComponent } from "./trainings/training-details-route/training-details-route.component";
export let routes: Routes = [
  { path: 'training', component: TrainingListRouteComponent },
  { path: 'training/:id', component: TrainingDetailsRouteComponent},
  { path: '**', redirectTo: '/training'}
];
