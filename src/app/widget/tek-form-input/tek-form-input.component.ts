import {Component, OnInit, Input} from '@angular/core';
import {TekLabelComponent} from "../tek-label/tek-label.component";

@Component({
  selector: 'tek-form-input',
  templateUrl: './tek-form-input.component.html',
  styleUrls: ['./tek-form-input.component.scss']
})
export class TekFormInputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  isFocused: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onFocus(){
    this.isFocused = true;
  }

  onBlur(){
    this.isFocused = false;
  }
}
