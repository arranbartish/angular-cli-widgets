import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool42HeadingComponent } from './tool42-heading.component';

describe('Tool42HeadingComponent', () => {
  let component: Tool42HeadingComponent;
  let fixture: ComponentFixture<Tool42HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
