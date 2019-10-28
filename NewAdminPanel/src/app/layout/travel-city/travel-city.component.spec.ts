import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCityComponent } from './travel-city.component';

describe('TravelCityComponent', () => {
  let component: TravelCityComponent;
  let fixture: ComponentFixture<TravelCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
