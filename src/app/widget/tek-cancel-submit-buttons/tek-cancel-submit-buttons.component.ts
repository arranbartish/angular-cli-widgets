import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tek-cancel-submit-buttons',
  templateUrl: './tek-cancel-submit-buttons.component.html',
  styleUrls: ['./tek-cancel-submit-buttons.component.scss']
})
export class TekCancelSubmitButtonsComponent implements OnInit {
  @Input()
  cancelCaption: string;

  @Input()
  submitCaption: string;

  @Output()
  onCancel = new EventEmitter();

  @Output()
  onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancelClick() {
    this.onCancel.emit();
  }

  onSubmitClick() {
    this.onSubmit.emit();
  }
}
