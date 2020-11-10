import { select, NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RootStoreState } from 'src/app/storemodule/redux/corestore';


@Component({
  selector: 'app-oshop-user-order-preview',
  templateUrl: './oshop-user-order-preview.component.html',
  styleUrls: ['./oshop-user-order-preview.component.css']
})
export class OshopUserOrderPreviewComponent {

  @select(element => element.orderstate) $orderList;
  orderID;

  constructor(ngRedux: NgRedux<RootStoreState>, private route: ActivatedRoute) {
    document.body.scrollTop = 0;
    this.orderID = this.route.snapshot.paramMap.get('orderID');
  }

}
