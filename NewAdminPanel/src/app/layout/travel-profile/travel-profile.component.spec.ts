import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProfileComponent } from './travel-profile.component';

describe('TravelProfileComponent', () => {
  let component: TravelProfileComponent;
  let fixture: ComponentFixture<TravelProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
