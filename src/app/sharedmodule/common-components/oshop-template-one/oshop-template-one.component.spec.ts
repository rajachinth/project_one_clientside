import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopTemplateOneComponent } from './oshop-template-one.component';

describe('OshopTemplateOneComponent', () => {
  let component: OshopTemplateOneComponent;
  let fixture: ComponentFixture<OshopTemplateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopTemplateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopTemplateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
