import { Action } from '@ngrx/store';

import { type } from 'app/utilities/type';
import { TreeElement } from '../valueObject/treeElement';

export const MenuAction = {
    LIST_MENU_ITEMS: type('Menu - list menu items'),
    ADD_MENU_ITEMS: type('Menu - add menu items')
};

export class MenuActionFactory {
    static listMenuItems(): Action {
        return new ListMenuItemsAction();
    }

    static addMenuItems(list: TreeElement[]): Action {
        return new AddMenuItemsAction(list);
    }
}

export class ListMenuItemsAction implements Action {
    type: string;
    payload?: any;

    constructor() {
        this.type = MenuAction.LIST_MENU_ITEMS;
        this.payload = [];
    }
}

export class AddMenuItemsAction implements Action {
    type: string;
    payload?: any;

    constructor(payload: TreeElement[]) {
        this.type = MenuAction.ADD_MENU_ITEMS;
        this.payload = payload;
    }
}
