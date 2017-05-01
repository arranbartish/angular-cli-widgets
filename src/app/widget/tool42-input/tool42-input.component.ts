import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-input',
  templateUrl: './tool42-input.component.html',
  styleUrls: ['./tool42-input.component.scss']
})
export class Tool42InputComponent implements OnChanges {
  @Input() height: string;
  @Input() type: string;
  @Input() placeHolder: string;
  style: string;
  className: string;

  constructor() {
  }

  ngOnChanges() {
    this.style = this.height + ' px;';
    switch (this.type) {
      case 'primary':
        this.className = 't42-input-primary';
        break;
      case 'secondary':
        this.className = 't42-input-secondary';
        break;
    }
  }

}
