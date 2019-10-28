import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingConfigurationComponent } from './trending-configuration.component';

describe('TrendingConfigurationComponent', () => {
  let component: TrendingConfigurationComponent;
  let fixture: ComponentFixture<TrendingConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
