/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EndpointConfigService } from './endpoint-config.service';

describe('EndpointConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndpointConfigService]
    });
  });

  it('should ...', inject([EndpointConfigService], (service: EndpointConfigService) => {
    expect(service).toBeTruthy();
  }));
});
