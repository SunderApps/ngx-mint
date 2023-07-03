import { TestBed } from '@angular/core/testing';

import { NgxMintService } from './ngx-mint.service';

describe('NgxMintService', () => {
  let service: NgxMintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
