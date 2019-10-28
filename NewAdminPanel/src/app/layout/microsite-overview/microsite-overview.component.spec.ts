import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeOverviewComponent } from './microsite-overview.component';

describe('MicrositeOverviewComponent', () => {
  let component: MicrositeOverviewComponent;
  let fixture: ComponentFixture<MicrositeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
