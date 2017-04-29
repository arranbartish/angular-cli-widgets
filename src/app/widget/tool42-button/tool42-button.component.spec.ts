import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42ButtonComponent } from './tool42-button.component';
import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42ButtonComponent', () => {
  let component: Tool42ButtonComponent;
  let fixture: ComponentFixture<Tool42ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ Tool42ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
