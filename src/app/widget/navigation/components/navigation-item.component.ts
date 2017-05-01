import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { TreeElement } from '../valueObject/treeElement';
import { TreeNode } from '../valueObject/treeNode';

@Component({
    selector: 'app-nav-item',
    templateUrl: './navigation-item.component.html'
})
export class NavigationItemComponent {
    @Input()
    public treeElements: TreeElement[];

    constructor(public location: Location) {
    }

    public isNode(treeElmt: TreeElement): boolean {
        return typeof (treeElmt as TreeNode).children !== 'undefined';
    }

    public asNode(treeElmt: TreeElement): TreeNode {
        return this.isNode(treeElmt) ? (treeElmt as TreeNode) : null;
    }

    public isActiveNavItem(treeElmt: TreeElement): boolean {
        return treeElmt.targetUrl === this.location.path();
    }

    public toSafeUrl(treeElmtUrl: string = ''): string {
        return treeElmtUrl.split('?')[0];
    }

    public toQueryParams(treeElmtUrl: string = ''): object {
        const tokens = treeElmtUrl.split('?');
        const result = { };

        if (tokens.length > 1) {
            new URLSearchParams(tokens[1]).paramsMap
                .forEach((value: string[], key: string) => result[key] = value);
        }

        return result;
    }
}
