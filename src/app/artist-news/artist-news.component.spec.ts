import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNewsComponent } from './artist-news.component';

describe('ArtistNewsComponent', () => {
  let component: ArtistNewsComponent;
  let fixture: ComponentFixture<ArtistNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
