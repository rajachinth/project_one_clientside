import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OShopAboutUsComponent } from './o-shop-about-us.component';

describe('OShopAboutUsComponent', () => {
  let component: OShopAboutUsComponent;
  let fixture: ComponentFixture<OShopAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OShopAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OShopAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
