import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopProductSearchComponent } from './oshop-product-search.component';

describe('OshopProductSearchComponent', () => {
  let component: OshopProductSearchComponent;
  let fixture: ComponentFixture<OshopProductSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopProductSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
