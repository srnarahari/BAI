import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeEditArtworkComponent } from './microsite-edit-artwork.component';

describe('MicrositeEditArtworkComponent', () => {
  let component: MicrositeEditArtworkComponent;
  let fixture: ComponentFixture<MicrositeEditArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeEditArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeEditArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
