import { TestBed } from '@angular/core/testing';

import { ApprovedPostService } from './approved-post.service';

describe('ApprovedPostService', () => {
  let service: ApprovedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
