import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import { TrainingService } from "../training.service";
import { Training } from "../training.model";

@Component({
  selector: 'app-training-details-route',
  templateUrl: './training-details-route.component.html',
  styleUrls: ['./training-details-route.component.css']
})
export class TrainingDetailsRouteComponent implements OnInit {

  selectedTraining: Training;

  constructor(private route: ActivatedRoute, private service: TrainingService) { }

  ngOnInit() {
    this.route.params
      .map(params => +params["id"])
      .switchMap(id => this.service.getById(id))
      .subscribe(training => this.selectedTraining = training);
  }

}
