import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelMediaItemFormComponent } from './reactive-model-media-item-form.component';

describe('ReactiveModelMediaItemFormComponent', () => {
  let component: ReactiveModelMediaItemFormComponent;
  let fixture: ComponentFixture<ReactiveModelMediaItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveModelMediaItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModelMediaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
