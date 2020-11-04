import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accessdenied-route',
  templateUrl: './accessdenied-route.component.html',
  styleUrls: ['./accessdenied-route.component.css']
})
export class AccessdeniedRouteComponent implements OnInit, OnDestroy {

  public queryParam;
  subscription: Subscription;
  constructor(private routeState: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.routeState.queryParamMap
        .subscribe(paramap => {
          this.queryParam = paramap.get('requestbackURL');
        });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
