import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopHomeComponent } from './oshop-home.component';

describe('OshopHomeComponent', () => {
  let component: OshopHomeComponent;
  let fixture: ComponentFixture<OshopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
