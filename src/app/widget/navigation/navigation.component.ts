import { Component, Input } from '@angular/core';

import { TreeElement } from './valueObject/treeElement';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Input()
    public treeElements: TreeElement[];

    constructor() {
        this.treeElements = [];
    }
}
