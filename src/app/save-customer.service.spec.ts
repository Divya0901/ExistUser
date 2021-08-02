import { TestBed } from '@angular/core/testing';

import { SaveCustomerService } from './save-customer.service';

describe('SaveCustomerService', () => {
  let service: SaveCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
