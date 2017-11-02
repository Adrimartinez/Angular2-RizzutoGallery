import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewViewsComponent } from './new-views.component';

describe('NewViewsComponent', () => {
  let component: NewViewsComponent;
  let fixture: ComponentFixture<NewViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
