import { TestBed, inject } from '@angular/core/testing';

import { AngularCliWidgetsComponentsService } from './angular-cli-widgets-components.service';

describe('AngularCliWidgetsComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularCliWidgetsComponentsService]
    });
  });

  it('should be created', inject([AngularCliWidgetsComponentsService], (service: AngularCliWidgetsComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
