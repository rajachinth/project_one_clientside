import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidrouteComponent } from './invalidroute.component';

describe('InvalidrouteComponent', () => {
  let component: InvalidrouteComponent;
  let fixture: ComponentFixture<InvalidrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
