import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-form-input-field',
  templateUrl: './tool42-form-input-field.component.html',
  styleUrls: ['./tool42-form-input-field.component.scss']
})
export class Tool42FormInputFieldComponent implements OnInit {
  @Input() type: string;
  @Input() buttonText: string;
  @Input() inputPlaceholder: string;

  constructor() {
  }

  ngOnInit() {
  }

}
