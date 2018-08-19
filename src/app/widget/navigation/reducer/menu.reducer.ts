
import { MenuAction } from '../actions/menu.action';

export const treeElements = (state: any = [], action: {type, payload}) => {
    switch (action.type) {
        case MenuAction.INIT_MENU_ITEMS:
            return action.payload;
        case MenuAction.ADD_MENU_ITEMS:
            return [...state, ...action.payload];
        case MenuAction.LIST_MENU_ITEMS:
        default:
            return state;
    }
};
