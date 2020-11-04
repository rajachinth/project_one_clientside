import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OShopProfileComponent } from './o-shop-profile.component';

describe('OShopProfileComponent', () => {
  let component: OShopProfileComponent;
  let fixture: ComponentFixture<OShopProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OShopProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OShopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
