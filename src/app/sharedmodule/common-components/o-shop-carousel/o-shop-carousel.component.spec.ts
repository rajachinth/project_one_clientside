import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OShopCarouselComponent } from './o-shop-carousel.component';

describe('OShopCarouselComponent', () => {
  let component: OShopCarouselComponent;
  let fixture: ComponentFixture<OShopCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OShopCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OShopCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
