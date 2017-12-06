import { TestBed, inject } from '@angular/core/testing';

import { DataStreamService } from './data-stream.service';

describe('DataStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStreamService]
    });
  });

  it('should be created', inject([DataStreamService], (service: DataStreamService) => {
    expect(service).toBeTruthy();
  }));
});
