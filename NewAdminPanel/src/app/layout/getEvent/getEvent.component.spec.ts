import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventComponent } from './getEvent.component';

describe('GetarticlesComponent', () => {
  let component: GetEventComponent;
  let fixture: ComponentFixture<GetEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
