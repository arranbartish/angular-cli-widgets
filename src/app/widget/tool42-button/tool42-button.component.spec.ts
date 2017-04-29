import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42ButtonComponent } from './tool42-button.component';

describe('Tool42ButtonComponent', () => {
  let component: Tool42ButtonComponent;
  let fixture: ComponentFixture<Tool42ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
