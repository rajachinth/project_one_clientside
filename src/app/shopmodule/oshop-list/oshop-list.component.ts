import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oshop-list',
  templateUrl: './oshop-list.component.html',
  styleUrls: ['./oshop-list.component.css']
})
export class OshopListComponent
{

  @Input('productLists') productLists;

  constructor() {}
  
}