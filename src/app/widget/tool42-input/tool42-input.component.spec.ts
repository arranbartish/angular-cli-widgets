import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42InputComponent } from './tool42-input.component';
import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42InputComponent', () => {
  let component: Tool42InputComponent;
  let fixture: ComponentFixture<Tool42InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ Tool42InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
