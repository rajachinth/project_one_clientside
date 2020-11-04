import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopProductComponent } from './oshop-product.component';

describe('OshopProductComponent', () => {
  let component: OshopProductComponent;
  let fixture: ComponentFixture<OshopProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
