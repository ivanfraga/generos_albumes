import { TestBed } from '@angular/core/testing';

import { PermisoSongGuard } from './permiso-song.guard';

xdescribe('PermisoSongGuard', () => {
  let guard: PermisoSongGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoSongGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
