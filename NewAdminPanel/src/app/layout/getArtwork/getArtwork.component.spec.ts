import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtworkComponent } from './getArtwork.component';

describe('GetarticlesComponent', () => {
  let component: GetArtworkComponent;
  let fixture: ComponentFixture<GetArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
