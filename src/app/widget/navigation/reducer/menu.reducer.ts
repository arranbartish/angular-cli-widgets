import { Action } from '@ngrx/store';

import { MenuAction } from '../actions/menu.action';

export const treeElements = (state: any = [], action: Action) => {
    switch (action.type) {
        case MenuAction.ADD_MENU_ITEMS:
            return [...action.payload];
        case MenuAction.LIST_MENU_ITEMS:
        default:
            return state;
    }
};
