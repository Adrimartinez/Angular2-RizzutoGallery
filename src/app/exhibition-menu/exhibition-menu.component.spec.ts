import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionMenuComponent } from './exhibition-menu.component';

describe('ExhibitionMenuComponent', () => {
  let component: ExhibitionMenuComponent;
  let fixture: ComponentFixture<ExhibitionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
