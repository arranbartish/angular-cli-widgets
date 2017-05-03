import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekFormInputComponent } from './tek-form-input.component';

describe('TekFormInputComponent', () => {
  let component: TekFormInputComponent;
  let fixture: ComponentFixture<TekFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
