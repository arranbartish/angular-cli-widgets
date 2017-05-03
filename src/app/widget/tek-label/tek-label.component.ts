import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tek-label',
  templateUrl: './tek-label.component.html',
  styleUrls: ['./tek-label.component.scss']
})
export class TekLabelComponent implements OnInit {
  @Input() level: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
