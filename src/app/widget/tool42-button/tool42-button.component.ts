import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-button',
  templateUrl: './tool42-button.component.html',
  styleUrls: ['./tool42-button.component.scss']
})
export class Tool42ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() state: string;
  @Input() size: string;
  @Input() text: string;
  className: String;

  constructor() {
  }

  ngOnInit() {

    switch (this.type + this.state) {
      case 'primaryactive' :
        this.className = 't42-btn-primary--active';
        break;
      case 'primaryhover' :
        this.className = 't42-btn-primary--hover';
        break;
      case 'primarydisabled' :
        this.className = 't42-btn-primary--disabled';
        break;
      case 'secondaryactive' :
        this.className = 't42-btn-secondary--active';
        break;
      case 'secondaryhover' :
        this.className = 't42-btn-secondary--hover';
        break;
      case 'secondarydisabled' :
        this.className = 't42-btn-secondary--disabled';
        break;
    }
  }
}
