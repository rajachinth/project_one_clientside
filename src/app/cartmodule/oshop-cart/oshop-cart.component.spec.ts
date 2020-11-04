import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopCartComponent } from './oshop-cart.component';

describe('OshopCartComponent', () => {
  let component: OshopCartComponent;
  let fixture: ComponentFixture<OshopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
