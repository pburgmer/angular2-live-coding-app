import { Component, OnInit } from '@angular/core';
import { TrainingService } from "../training.service";
import { Training } from "../training.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-training-list-route',
  templateUrl: './training-list-route.component.html',
  styleUrls: ['./training-list-route.component.css']
})
export class TrainingListRouteComponent implements OnInit {

  list: Training[];

  constructor(private service: TrainingService, private router: Router) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(trainings => this.list = trainings);
  }

  onTrainingSelected(training: Training) {
    this.router.navigate(['/training', training.id]);
  }

}
