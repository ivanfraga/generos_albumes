import { TestBed } from '@angular/core/testing';

import { PermisoArtistGuard } from './permiso-artist.guard';

xdescribe('PermisoArtistGuard', () => {
  let guard: PermisoArtistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoArtistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
