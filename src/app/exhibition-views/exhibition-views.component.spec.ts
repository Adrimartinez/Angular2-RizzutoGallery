import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionViewsComponent } from './exhibition-views.component';

describe('ExhibitionViewsComponent', () => {
  let component: ExhibitionViewsComponent;
  let fixture: ComponentFixture<ExhibitionViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
