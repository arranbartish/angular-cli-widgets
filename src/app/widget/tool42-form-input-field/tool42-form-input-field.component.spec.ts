import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42FormInputFieldComponent } from './tool42-form-input-field.component';

describe('Tool42FormInputFieldComponent', () => {
  let component: Tool42FormInputFieldComponent;
  let fixture: ComponentFixture<Tool42FormInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tool42FormInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42FormInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
