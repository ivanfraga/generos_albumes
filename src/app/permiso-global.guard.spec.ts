import { TestBed } from '@angular/core/testing';

import { PermisoGlobalGuard } from './permiso-global.guard';

describe('PermisoGlobalGuard', () => {
  let guard: PermisoGlobalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoGlobalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
