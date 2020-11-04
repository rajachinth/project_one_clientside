import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopUserOrdersComponent } from './oshop-user-orders.component';

describe('OshopUserOrdersComponent', () => {
  let component: OshopUserOrdersComponent;
  let fixture: ComponentFixture<OshopUserOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopUserOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
