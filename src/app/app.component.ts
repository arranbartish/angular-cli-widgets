import { Component } from '@angular/core';

import { SearchOptions } from '../../projects/angular-cli-widgets-components/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchOptions: SearchOptions = {
    name: 'a-search',
    target: './search'
  };

}
