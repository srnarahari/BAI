import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGlobalStoriesComponent } from './top-global-stories.component';

describe('TopGlobalStoriesComponent', () => {
  let component: TopGlobalStoriesComponent;
  let fixture: ComponentFixture<TopGlobalStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGlobalStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGlobalStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
