import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-label',
  templateUrl: './tool42-label.component.html',
  styleUrls: ['./tool42-label.component.scss']
})
export class Tool42LabelComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  className: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.type) {
      case 'primary':
        this.className = 't42-label-primary';
        break;
      case 'secondary':
        this.className = 't42-label-secondary';
        break;
    }
  }

}
