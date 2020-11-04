import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopCartSummaryComponent } from './oshop-cart-summary.component';

describe('OshopCartSummaryComponent', () => {
  let component: OshopCartSummaryComponent;
  let fixture: ComponentFixture<OshopCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
