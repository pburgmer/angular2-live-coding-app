/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TrainingService } from './training.service';

describe('Service: Training', () => {
  beforeEach(() => {
    addProviders([TrainingService]);
  });

  it('should ...',
    inject([TrainingService],
      (service: TrainingService) => {
        expect(service).toBeTruthy();
      }));
});
