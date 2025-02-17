import { TestBed } from '@angular/core/testing';

import { Register } from './registro.service';

describe('RegistroService', () => {
  let service: Register;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Register);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
