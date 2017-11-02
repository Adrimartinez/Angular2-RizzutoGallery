import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionArtistsComponent } from './exhibition-artists.component';

describe('ExhibitionArtistsComponent', () => {
  let component: ExhibitionArtistsComponent;
  let fixture: ComponentFixture<ExhibitionArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
