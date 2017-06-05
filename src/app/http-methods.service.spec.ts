/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpMethodsService } from './http-methods.service';

describe('HttpMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMethodsService]
    });
  });

  it('should ...', inject([HttpMethodsService], (service: HttpMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
