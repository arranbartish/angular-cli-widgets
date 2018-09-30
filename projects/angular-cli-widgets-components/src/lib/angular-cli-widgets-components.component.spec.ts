import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCliWidgetsComponentsComponent } from './angular-cli-widgets-components.component';

describe('AngularCliWidgetsComponentsComponent', () => {
  let component: AngularCliWidgetsComponentsComponent;
  let fixture: ComponentFixture<AngularCliWidgetsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCliWidgetsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCliWidgetsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
