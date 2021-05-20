import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-message',
  templateUrl: './validate-message.component.html',
  styles: [
  ]
})
export class ValidateMessageComponent implements OnInit {

  @Input() error:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
