import {Component} from '@angular/core';
import {SearchOptions} from './widget/search-form/search-options';
import {TreeElement} from './widget/navigation/valueObject/treeElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  atomsSectionTitle = 'Atoms';
  moleculesSectionTitle = 'Molecules';
  organismsSectionTitle = 'Organisms';

  searchOptions: SearchOptions = {
    name: 'a-search',
    target: './search'
  };

  treeElements: TreeElement[] = [
    { title: 'A Link', targetUrl: '/a-uri', imageCssClass: 'glyphicon-font' },
    { title: 'B Link', targetUrl: '/b-uri', imageCssClass: 'glyphicon-bold' }
  ];
}
