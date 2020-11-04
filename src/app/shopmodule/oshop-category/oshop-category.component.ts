import { select } from '@angular-redux/store';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-oshop-category',
  templateUrl: './oshop-category.component.html',
  styleUrls: ['./oshop-category.component.css']
})
export class OshopCategoryComponent {

  @select(value => value.logstate.show) $logState: Observable<object>;

  @Input('categoryParamsValue') categoryParamsValue;
  @Output('customevent') clickEvent = new EventEmitter();
  @Input('categoryList') categoryList;

  onclick() { this.clickEvent.emit('event raised on click'); }
}
