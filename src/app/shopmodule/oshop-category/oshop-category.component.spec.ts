import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopCategoryComponent } from './oshop-category.component';

describe('OshopCategoryComponent', () => {
  let component: OshopCategoryComponent;
  let fixture: ComponentFixture<OshopCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
