import { TestBed } from '@angular/core/testing';

import { HttpIntersepterService } from './http-intersepter.service';

describe('HttpIntersepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntersepterService = TestBed.get(HttpIntersepterService);
    expect(service).toBeTruthy();
  });
});
