import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreShowComponent } from './genre-show.component';

describe('GenreShowComponent', () => {
  let component: GenreShowComponent;
  let fixture: ComponentFixture<GenreShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
