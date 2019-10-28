import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEntityLocationComponent } from './getEntityLocation.component';

describe('GetarticlesComponent', () => {
  let component: GetEntityLocationComponent;
  let fixture: ComponentFixture<GetEntityLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEntityLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEntityLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
