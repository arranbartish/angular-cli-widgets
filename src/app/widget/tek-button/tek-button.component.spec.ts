import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekButtonComponent } from './tek-button.component';
import {expect} from 'chai';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('TekButtonComponent', () => {
  let component: TekButtonComponent;
  let fixture: ComponentFixture<TekButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ TekButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
