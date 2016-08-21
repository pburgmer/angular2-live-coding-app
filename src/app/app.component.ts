import { Component, OnInit } from '@angular/core';
import { Training } from './trainings/training.model';
import { TrainingListComponent } from './trainings/training-list';
import { TrainingDetailsComponent } from './trainings/training-details';
import { TrainingService } from './trainings/training.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TrainingListComponent, TrainingDetailsComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  data: Training[];
  selectedData: Training;

  constructor(private service: TrainingService) {}

  ngOnInit() {
    this.service.getAll().subscribe(trainings => this.data = trainings);
  }
}
