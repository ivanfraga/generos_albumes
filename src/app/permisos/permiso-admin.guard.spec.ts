import { TestBed } from '@angular/core/testing';

import { PermisoAdminGuard } from './permiso-admin.guard';

xdescribe('PermisoAdminGuard', () => {
  let guard: PermisoAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
