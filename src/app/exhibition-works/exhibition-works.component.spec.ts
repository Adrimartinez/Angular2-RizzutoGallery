import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionWorksComponent } from './exhibition-works.component';

describe('ExhibitionWorksComponent', () => {
  let component: ExhibitionWorksComponent;
  let fixture: ComponentFixture<ExhibitionWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
