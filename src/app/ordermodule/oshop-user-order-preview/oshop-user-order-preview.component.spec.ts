import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopUserOrderPreviewComponent } from './oshop-user-order-preview.component';

describe('OshopUserOrderPreviewComponent', () => {
  let component: OshopUserOrderPreviewComponent;
  let fixture: ComponentFixture<OshopUserOrderPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopUserOrderPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopUserOrderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
