import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSlideshowComponent } from './popular-slideshow.component';

describe('PopularSlideshowComponent', () => {
  let component: PopularSlideshowComponent;
  let fixture: ComponentFixture<PopularSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
