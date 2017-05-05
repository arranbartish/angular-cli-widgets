import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekCancelSubmitButtonsComponent } from './tek-cancel-submit-buttons.component';
import {expect} from 'chai';


describe('TekCancelSubmitButtonsComponent', () => {
  let component: TekCancelSubmitButtonsComponent;
  let fixture: ComponentFixture<TekCancelSubmitButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekCancelSubmitButtonsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekCancelSubmitButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });
});
