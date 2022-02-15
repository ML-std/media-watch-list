import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemListComponentComponent } from './media-item-list-component.component';

describe('MediaItemListComponentComponent', () => {
  let component: MediaItemListComponentComponent;
  let fixture: ComponentFixture<MediaItemListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItemListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
