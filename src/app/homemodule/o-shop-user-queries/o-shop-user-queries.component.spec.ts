import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OShopUserQueriesComponent } from './o-shop-user-queries.component';

describe('OShopUserQueriesComponent', () => {
  let component: OShopUserQueriesComponent;
  let fixture: ComponentFixture<OShopUserQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OShopUserQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OShopUserQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
