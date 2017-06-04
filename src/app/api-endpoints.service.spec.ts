/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiEndpointsService } from './api-endpoints.service';

describe('ApiEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEndpointsService]
    });
  });

  it('should ...', inject([ApiEndpointsService], (service: ApiEndpointsService) => {
    expect(service).toBeTruthy();
  }));
});
