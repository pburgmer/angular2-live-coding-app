import { Component } from '@angular/core';
import { TRAININGS } from './trainings/training.mock';
import { Training } from './trainings/training.model';
import { TrainingListComponent } from './trainings/training-list';
import { TrainingDetailsComponent } from './trainings/training-details';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TrainingListComponent, TrainingDetailsComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  data: Training[] = TRAININGS;
  selectedData: Training;
}
