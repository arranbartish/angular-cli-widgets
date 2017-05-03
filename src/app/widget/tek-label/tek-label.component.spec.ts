import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekLabelComponent } from './tek-label.component';
import {expect} from 'chai';

describe('TekLabelComponent', () => {
  let component: TekLabelComponent;
  let fixture: ComponentFixture<TekLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });
});
