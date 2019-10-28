import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeArtworksComponent } from './microsite-artworks.component';

describe('MicrositeArtworksComponent', () => {
  let component: MicrositeArtworksComponent;
  let fixture: ComponentFixture<MicrositeArtworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeArtworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
