import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42LabelComponent } from './tool42-label.component';
import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42LabelComponent', () => {
  let component: Tool42LabelComponent;
  let fixture: ComponentFixture<Tool42LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ Tool42LabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
