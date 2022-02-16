import { TestBed } from '@angular/core/testing';

import { MediaItemServiceService } from './media-item-service.service';

describe('MediaItemServiceService', () => {
  let service: MediaItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
