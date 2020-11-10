import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oshop-template-one',
  templateUrl: './oshop-template-one.component.html',
  styleUrls: ['./oshop-template-one.component.css']
})
export class OshopTemplateOneComponent implements OnInit {

  @Input('type') type;
  
  constructor() { }

  ngOnInit() {
  }

}
