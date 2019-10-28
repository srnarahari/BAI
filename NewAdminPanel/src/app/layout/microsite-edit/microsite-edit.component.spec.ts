import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeEditComponent } from './microsite-edit.component';

describe('MicrositeEditComponent', () => {
  let component: MicrositeEditComponent;
  let fixture: ComponentFixture<MicrositeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
