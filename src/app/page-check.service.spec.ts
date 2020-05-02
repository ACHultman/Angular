import { TestBed } from '@angular/core/testing';

import { PageCheckService } from './page-check.service';

describe('PageCheckService', () => {
  let service: PageCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
