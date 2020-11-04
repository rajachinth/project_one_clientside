import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopProfileEditComponent } from './oshop-profile-edit.component';

describe('OshopProfileEditComponent', () => {
  let component: OshopProfileEditComponent;
  let fixture: ComponentFixture<OshopProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
