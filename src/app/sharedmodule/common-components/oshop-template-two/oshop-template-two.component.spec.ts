import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopTemplateTwoComponent } from './oshop-template-two.component';

describe('OshopTemplateTwoComponent', () => {
  let component: OshopTemplateTwoComponent;
  let fixture: ComponentFixture<OshopTemplateTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopTemplateTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopTemplateTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
