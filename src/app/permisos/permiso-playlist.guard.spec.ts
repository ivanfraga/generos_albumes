import { TestBed } from '@angular/core/testing';

import { PermisoPlaylistGuard } from './permiso-playlist.guard';

xdescribe('PermisoPlaylistGuard', () => {
  let guard: PermisoPlaylistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoPlaylistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
