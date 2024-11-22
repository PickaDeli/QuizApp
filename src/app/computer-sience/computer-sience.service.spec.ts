import { TestBed } from '@angular/core/testing';

import { ComputerSienceService } from './computer-sience.service';

describe('ComputerSienceService', () => {
  let service: ComputerSienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerSienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
