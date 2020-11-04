import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdeniedRouteComponent } from './accessdenied-route.component';

describe('AccessdeniedRouteComponent', () => {
  let component: AccessdeniedRouteComponent;
  let fixture: ComponentFixture<AccessdeniedRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessdeniedRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessdeniedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
