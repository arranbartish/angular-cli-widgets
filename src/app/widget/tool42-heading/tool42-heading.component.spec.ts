import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42HeadingComponent } from './tool42-heading.component';
import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Tool42HeadingComponent', () => {
  let component: Tool42HeadingComponent;
  let fixture: ComponentFixture<Tool42HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ Tool42HeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool42HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
