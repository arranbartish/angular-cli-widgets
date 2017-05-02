import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42ContactUsComponent } from './tool42-contact-us.component';

import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42ContactUsComponent', () => {
  let component: Tool42ContactUsComponent;
  let fixture: ComponentFixture<Tool42ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ Tool42ContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
