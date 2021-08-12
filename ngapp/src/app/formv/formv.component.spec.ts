import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvComponent } from './formv.component';

describe('FormvComponent', () => {
  let component: FormvComponent;
  let fixture: ComponentFixture<FormvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
