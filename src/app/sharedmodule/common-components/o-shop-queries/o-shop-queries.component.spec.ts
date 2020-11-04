import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OShopQueriesComponent } from './o-shop-queries.component';

describe('OShopQueriesComponent', () => {
  let component: OShopQueriesComponent;
  let fixture: ComponentFixture<OShopQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OShopQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OShopQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
