import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42FormInputFieldComponent } from './tool42-form-input-field.component';

import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42FormInputFieldComponent', () => {
  let component: Tool42FormInputFieldComponent;
  let fixture: ComponentFixture<Tool42FormInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
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
    expect(component).to.exist;
  });
});
