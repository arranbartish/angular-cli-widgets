import { TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { expect } from 'chai';

import { TreeElement } from '../valueObject/treeElement';
import { MenuActionFactory } from '../actions/menu.action';
import { WidgetModule } from '../../widget.module';
import { MenuState } from '../store/menu.state';
import { treeElements } from '../reducer/menu.reducer'

describe('menu reducer', () => {

    let store: Store<MenuState>;

    let subscribedMenuItems: TreeElement[];

    const menuPayload: TreeElement[] = [
        { title: 'Search root', targetUrl: '/something/overview', imageCssClass: 'glyphicon glyphicon-home' },
        { title: 'Search something', targetUrl: '/something/search', imageCssClass: 'glyphicon glyphicon-search' },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WidgetModule, StoreModule.provideStore({ treeElements })],
        });
    });

    beforeEach(inject([Store], (_store: Store<MenuState>) => {
        store = _store;
    }));

    beforeEach(() => {
        store.select(state => state.treeElements).subscribe(model => subscribedMenuItems = model);
    });

    it('will return empty array when the state is empty', () => {
        store.dispatch(MenuActionFactory.listMenuItems());
        expect(subscribedMenuItems).to.eql([]);
    });

    it('will set a filled-in array then get it back from the state', () => {
        store.dispatch(MenuActionFactory.setMenuItems(menuPayload));
        store.dispatch(MenuActionFactory.listMenuItems());
        expect(subscribedMenuItems).to.eql(menuPayload);
    });

    it('will set an empty array then get it back from the state', () => {
        store.dispatch(MenuActionFactory.setMenuItems([]));
        store.dispatch(MenuActionFactory.listMenuItems());
        expect(subscribedMenuItems).to.eql([]);
    });

    it('will set a filled-in array, then will provide one extra entry, then get the whole thing back from the state', () => {
        const menuPayload2: TreeElement[] = [
            { title: 'Administrate something', targetUrl: '/something/admin', imageCssClass: 'glyphicon glyphicon-pencil' },
        ];
        store.dispatch(MenuActionFactory.setMenuItems(menuPayload));
        store.dispatch(MenuActionFactory.addMenuItems(menuPayload2));
        store.dispatch(MenuActionFactory.listMenuItems());
        expect(subscribedMenuItems).to.eql([ ...menuPayload, ...menuPayload2 ]);
    });
});
