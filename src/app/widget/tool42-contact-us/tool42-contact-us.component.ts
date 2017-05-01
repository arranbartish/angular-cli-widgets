import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool42-contact-us',
  templateUrl: './tool42-contact-us.component.html',
  styleUrls: ['./tool42-contact-us.component.scss']
})
export class Tool42ContactUsComponent implements OnInit {
  @Input() type: string;

  constructor() {
  }

  ngOnInit() {
  }

}
