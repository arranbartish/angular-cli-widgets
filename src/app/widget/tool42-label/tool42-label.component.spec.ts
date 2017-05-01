import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42LabelComponent } from './tool42-label.component';

describe('Tool42LabelComponent', () => {
  let component: Tool42LabelComponent;
  let fixture: ComponentFixture<Tool42LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
