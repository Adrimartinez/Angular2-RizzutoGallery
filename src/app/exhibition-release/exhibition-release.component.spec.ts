import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionReleaseComponent } from './exhibition-release.component';

describe('ExhibitionReleaseComponent', () => {
  let component: ExhibitionReleaseComponent;
  let fixture: ComponentFixture<ExhibitionReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
