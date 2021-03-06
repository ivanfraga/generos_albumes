import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumShowComponent } from './album-show.component';

describe('AlbumShowComponent', () => {
  let component: AlbumShowComponent;
  let fixture: ComponentFixture<AlbumShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
