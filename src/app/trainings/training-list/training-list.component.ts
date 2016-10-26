import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from "../training.model";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  @Input() trainings: Training[];
  @Output() trainingSelected = new EventEmitter<Training>();

  constructor() { }

  ngOnInit() {
  }

  listItemClicked(training: Training) {
    this.trainingSelected.emit(training);
  }

}
