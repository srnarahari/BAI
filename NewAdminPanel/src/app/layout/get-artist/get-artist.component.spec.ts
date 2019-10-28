import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtistComponent } from './get-artist.component';

describe('GetArtistComponent', () => {
  let component: GetArtistComponent;
  let fixture: ComponentFixture<GetArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
