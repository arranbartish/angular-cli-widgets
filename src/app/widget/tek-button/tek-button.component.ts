import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tek-button',
  templateUrl: './tek-button.component.html',
  styleUrls: ['./tek-button.component.scss']
})
export class TekButtonComponent implements OnInit {
  @Input()
  type: string;

  @Input()
  state: string;

  @Input()
  disabled: boolean;

  @Input()
  caption: string;

  @Output()
  onClick = new EventEmitter();

  className: string[];

  constructor() {
  }

  ngOnInit() {
  }

  onBtnClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
