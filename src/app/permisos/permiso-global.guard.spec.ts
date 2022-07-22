import { TestBed } from '@angular/core/testing';

import { PermisoGlobalGuard } from './permiso-global.guard';

xdescribe('PermisoGlobalGuard', () => {
  let guard: PermisoGlobalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoGlobalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
