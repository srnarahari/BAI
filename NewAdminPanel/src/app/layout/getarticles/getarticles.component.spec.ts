import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetarticlesComponent } from './getarticles.component';

describe('GetarticlesComponent', () => {
  let component: GetarticlesComponent;
  let fixture: ComponentFixture<GetarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
