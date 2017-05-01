import { Location, LocationStrategy } from '@angular/common';
import { NO_ERRORS_SCHEMA, DebugElement, Component } from '@angular/core';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { expect } from 'chai';
import * as _ from 'lodash';

import { NavigationItemComponent } from './navigation-item.component';
import { TreeNode } from '../valueObject/treeNode';
import { TreeLeaf } from '../valueObject/treeLeaf';
import { TreeElement } from '../valueObject/treeElement';

describe('NavigationItemComponent', () => {
    let fixture: ComponentFixture<NavigationItemComponent>;
    let component: NavigationItemComponent;
    let cmpLocation: Location;
    const inputs = getData();
    const navMenu = inputs[0];
    const expected = inputs[1];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavigationItemComponent
            ],
            providers: [
                { provide: Location, useClass: class { path = sinon.stub(); } },
                LocationStrategy
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(async(inject([Location], (loc: Location) => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(NavigationItemComponent);
            component = fixture.componentInstance;
            component.treeElements = navMenu;
            fixture.detectChanges();
        });

        cmpLocation = loc;
    })));

    function createComparableElement(element: any) {
        const _comparableElmt = _.cloneDeep(element);
        delete _comparableElmt.children;
        delete _comparableElmt.imageCssClass;
        return _comparableElmt;
    }

    function representElementNode(elementNode: any, elementLink: any) {
        return {
            title: elementLink.title,
            routerLink: elementLink.routerLink,
        };
    }

    function representLink(elementLink: any, elementSpan: any) {
        return {
            title: _.replace(elementLink.id, 'nav-link-', ''),
            targetUrl: _.replace(elementLink.routerLink, /^http:\/\/.+:[0-9]+/, '')
        };
    }

    function findLinkByName(name: string) {
        const links = _.filter(fixture.debugElement.children, (element: DebugElement) => {
            const elementId = element.children[0].nativeElement.attributes.id.value;
            return _.endsWith(elementId, 'nav-node-' + name) || _.endsWith(elementId, 'nav-link-' + name);
        });

        if (!_.isEmpty(links[0].nativeElement.querySelector('ul'))) {
            return representElementNode(links[0].nativeElement.querySelector('ul'), links[0].nativeElement.querySelector('a'));
        } else {
            return representLink(links[0].nativeElement.querySelector('a'), links[0].nativeElement.querySelector('span'));
        }
    }

    parameters([
        [navMenu[0], expected[0]],
        [navMenu[1], expected[1]],
        [navMenu[2], expected[2]]
    ],
    (elmt: TreeElement, result) => {
        it('will generate link for ' + elmt.title, async(() => {
            fixture.whenStable().then(() => {
                const _comparableElmt = createComparableElement(elmt);
                const _aLink = findLinkByName(elmt.title);
                expect(_aLink).to.eql(_comparableElmt);
            });
        }));

        // remove these
        it('will verify if  ' + elmt.title + '  is a node', async(() => {
            fixture.whenStable().then(() => {
                expect(component.isNode(elmt)).to.eql(result.isNode);
            });
        }));

        it('will verify if  ' + elmt.title + '  is as node', async(() => {
            fixture.whenStable().then(() => {
                expect(component.asNode(elmt)).to.eql(result.asNode);
            });
        }));

        it('will verify if  ' + elmt.title + '  is active', async(() => {
            fixture.whenStable().then(() => {
                const isActive: boolean = result.isActive;
                if (isActive) {
                    (cmpLocation.path as sinon.SinonStub).returns(elmt.targetUrl);
                }
                expect(component.isActiveNavItem(elmt)).to.equal(result.isActive);
            });
        }));
    });

    it('will truncate the query string parameters', () => {
        expect(component.toSafeUrl('/search?q=abc')).to.equals('/search');
    });

    it('will keep the query string parameters only, if one', () => {
        const result = component.toQueryParams('/search?q=abc');
        expect(JSON.stringify(result)).to.equals(JSON.stringify({ q: ['abc'] }));
    });

    it('will keep the query string parameters only, if many', () => {
        const result = component.toQueryParams('/search?q=abc&q=def&page=2');
        expect(JSON.stringify(result)).to.equals(JSON.stringify({ q: ['abc', 'def'], page: ['2'] }));
    });

    it('will keep the query string parameters only, if none', () => {
        const result = component.toQueryParams('/search');
        expect(JSON.stringify(result)).to.equals(JSON.stringify({}));
    });
});

// Helper functions.
function parameters(inputData, execFunction) {
    _.each(inputData, (record) => {
        execFunction.call(this, record[0], record[1]);
    });
}

function getData(): Array<any> {
    const homeNode: TreeElement = { title: 'Home', targetUrl: '/home', imageCssClass: 'glyphicon-home' };
    const searchNode: TreeElement = { title: 'Search', targetUrl: '/search', imageCssClass: 'glyphicon-search' };
    const brande: TreeLeaf = { title: 'Brand', targetUrl: '/car/brand', imageCssClass: 'glyphicon-road' };
    const type: TreeLeaf = { title: 'Type', targetUrl: '/car/type', imageCssClass: 'glyphicon-road' };
    const carNode: TreeNode = { title: 'Car', targetUrl: '/car', children: [brande, type], imageCssClass: 'glyphicon-road' };

    const menu: Array<TreeElement> = [homeNode, searchNode, carNode];

    const expectedTable: Array<any> = [
        { isNode: false, isActive: false, asNode: null },
        { isNode: false, isActive: false, asNode: null },
        { isNode: true, isActive: true, asNode: carNode },
    ];

    return [menu, expectedTable];
}
