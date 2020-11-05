import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from "jquery";
import { RootStoreState } from 'src/app/storemodule/redux/corestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginData: String;

  constructor(private ngRedux: NgRedux<RootStoreState>) {  }

  ngOnInit(): void {
     this.loginData = this.ngRedux.getState().loginstate.uniqueID;
     $(document).ready(function() {
      // console.log('jquery element click');
      $('.header-brand-logo').trigger('click');
    }); 
    // document.getElementsByClassName('header-brand-logo')
    //  docu  ment.getElementById('HeaderClick').click();
  } 

  
}
