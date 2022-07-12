import { TestBed } from '@angular/core/testing';

import { PermisoGeneroGuard } from './permiso-genero.guard';

describe('PermisoGeneroGuard', () => {
  let guard: PermisoGeneroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoGeneroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
