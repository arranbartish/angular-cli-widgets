import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekContactUsFormComponent } from './tek-contact-us-form.component';

describe('TekContactUsFormComponent', () => {
  let component: TekContactUsFormComponent;
  let fixture: ComponentFixture<TekContactUsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekContactUsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
