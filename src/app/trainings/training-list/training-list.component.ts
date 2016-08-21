import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from './../training.model';

@Component({
  moduleId: module.id,
  selector: 'app-training-list',
  templateUrl: 'training-list.component.html',
  styleUrls: ['training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  @Input()
  trainings: Training[];

  @Output()
  trainingSelected = new EventEmitter<Training>();

  selectedTraining: Training;

  constructor() { }

  ngOnInit() {
  }

  onListItemClicked(clickedTraining: Training) {
    this.trainingSelected.emit(clickedTraining);
    this.selectedTraining = clickedTraining;
  }

}
