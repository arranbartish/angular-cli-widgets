import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tek-contact-us-form',
  templateUrl: './tek-contact-us-form.component.html',
  styleUrls: ['./tek-contact-us-form.component.scss']
})
export class TekContactUsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  onCancel = new EventEmitter();

  @Output()
  onSubmit = new EventEmitter();

  onCancelClick = function(){
    this.onCancel.emit();
  }

  onSubmitClick = function(){
    this.onSubmit.emit();
  }
}
