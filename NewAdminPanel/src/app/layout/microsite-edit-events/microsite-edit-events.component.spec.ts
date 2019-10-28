import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeEditEventsComponent } from './microsite-edit-events.component';

describe('MicrositeEditEventsComponent', () => {
  let component: MicrositeEditEventsComponent;
  let fixture: ComponentFixture<MicrositeEditEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeEditEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeEditEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
