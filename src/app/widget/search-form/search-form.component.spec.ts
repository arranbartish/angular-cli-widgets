import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { expect } from 'chai';

import { SearchFormComponent, UNDEFINED_NAME, DEFAULT_TARGET } from './search-form.component';
import { SearchOptions } from './search-options';
import { UtilitiesModule } from './../../utilities/utilities.module';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;

  let fixture: ComponentFixture<SearchFormComponent>;

  let mockRouter: Router;
  let subscribedTerm: string;

  const undefinedDefaultConfigurtion: SearchOptions = {
    name: UNDEFINED_NAME,
    target: DEFAULT_TARGET
  };

  const expectedOptions: SearchOptions = {
    name: 'unit-test',
    target: './some-path'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, UtilitiesModule],
      declarations: [SearchFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = sinon.stub(); }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([Router], (router: Router) => {
    mockRouter = router;
  }));


  it('will be defined', () => {
    expect(component).to.exist;
  });


  it('will have configured options with undefined defaults', () => {
    expect(component.configuredOptions).to.eql(undefinedDefaultConfigurtion);
  });

  describe('initialisation', () => {

    it('will keep default configuration when no options are provided', () => {
      component.ngOnInit();
      expect(component.configuredOptions).to.eql(undefinedDefaultConfigurtion);
    });

    it('will apply configuration provided as options', () => {
      component.options = expectedOptions;

      component.ngOnInit();

      expect(component.configuredOptions).to.eql(expectedOptions);
    });

    it('will have an invalid form by default', () => {

      component.ngOnInit();

      expect(component.searchForm.valid).to.not.be.ok;
    });
  });

  describe('search', () => {

    const searchTerm = 'find-me';
    const expectedQueryParameters = { queryParams: { q: searchTerm } };

    beforeEach(() => {
      component.options = expectedOptions;
      component.ngOnInit();
    });

    describe('when no valid input is provided', () => {


      it('will be able to be called and navigate away', () => {
        component.search();
        sinon.assert.notCalled(mockRouter.navigate as sinon.SinonStub);
      });

      it('will not change the subscribed term', () => {
        component.search();
        expect(subscribedTerm).not.to.exist;
      });

    });

    describe('when valid input is provided', () => {

      beforeEach(() => {
        component.terms = searchTerm;
        component.searchedTerms = new EventEmitter<string>();
        fixture.detectChanges();
      });

      it('will define the form to be valid', () => {
        expect(component.searchForm.valid).to.be.ok;
      });


      it('will navigate to the configured target', () => {
        component.search();
        sinon.assert.calledWith(mockRouter.navigate as sinon.SinonStub, [expectedOptions.target], expectedQueryParameters);
      })
      ;

      it('will update a subscribed term', () => {
        component.searchedTerms.subscribe(event => subscribedTerm = event);
        component.search();
        expect(subscribedTerm).to.equal(searchTerm);
      });

    });

  });

});
