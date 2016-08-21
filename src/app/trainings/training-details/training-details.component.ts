import { Component, OnInit, Input } from '@angular/core';
import { Training } from './../training.model';

@Component({
  moduleId: module.id,
  selector: 'app-training-details',
  templateUrl: 'training-details.component.html',
  styleUrls: ['training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  @Input()
  training: Training;
  
  constructor() { }

  ngOnInit() {
  }

}
