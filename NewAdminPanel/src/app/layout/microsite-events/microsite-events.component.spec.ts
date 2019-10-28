import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeEventsComponent } from './microsite-events.component';

describe('MicrositeEventsComponent', () => {
  let component: MicrositeEventsComponent;
  let fixture: ComponentFixture<MicrositeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
