import {TestBed} from '@angular/core/testing';

import {NgxPickrService} from './ngx-pickr.service';

describe('NgxPickrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPickrService = TestBed.get(NgxPickrService);
    expect(service).toBeTruthy();
  });
});
