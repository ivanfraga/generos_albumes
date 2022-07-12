import { TestBed } from '@angular/core/testing';

import { PermisoAlbumGuard } from './permiso-album.guard';

describe('PermisoAlbumGuard', () => {
  let guard: PermisoAlbumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoAlbumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
