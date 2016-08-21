import {Training} from "./training.model";

function nowPlusDays(days: number): Date {
  return new Date(Date.now() + 1000 * 60 * 60 * 24 * days);
}

export const TRAININGS:Training[] = [
  new Training("AngularJS Basics", "The Basic Knowledge you know to develop your SinglePageApplication",
      nowPlusDays(24), false, "assets/images/trainings/angularjs-shield.svg"),
  new Training("AngularJS Advanced", "Great Advanced course about the superheroic Framework",
      nowPlusDays(12), false, "assets/images/trainings/angularjs-shield.svg"),
  new Training("Angular2 & TypeScript", "Awesome course about the brand new Angular 2",
      nowPlusDays(3), false, "assets/images/trainings/angular2-shield.svg"),
  new Training("TypeScript", "The right way to understand how to bring JavaScript to another Level",
      nowPlusDays(6), false, "assets/images/trainings/typescript-logo.svg"),
  new Training("Eclipse RCP", "Old School",
      new Date(2015, 11, 2), true)
];

TRAININGS.forEach(Object.freeze);
Object.freeze(TRAININGS);

