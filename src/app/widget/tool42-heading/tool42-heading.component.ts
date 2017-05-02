import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-heading',
  templateUrl: './tool42-heading.component.html',
  styleUrls: ['./tool42-heading.component.scss']
})
export class Tool42HeadingComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() color: string;
  className: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.type) {
      case 'primary':
        this.className = 't42-heading-primary';
        break;
      case 'secondary':
        this.className = 't42-heading-secondary';
        break;
    }
  }

}
