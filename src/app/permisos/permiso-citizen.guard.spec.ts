import { TestBed } from '@angular/core/testing';

import { PermisoCitizenGuard } from './permiso-citizen.guard';

xdescribe('PermisoCitizenGuard', () => {
  let guard: PermisoCitizenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoCitizenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
