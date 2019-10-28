import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityLocationProfileComponent } from './entityLocationProfile.component';

describe('ArticleComponent', () => {
  let component: EntityLocationProfileComponent;
  let fixture: ComponentFixture<EntityLocationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityLocationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityLocationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
