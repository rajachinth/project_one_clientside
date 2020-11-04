import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopListComponent } from './oshop-list.component';

describe('OshopListComponent', () => {
  let component: OshopListComponent;
  let fixture: ComponentFixture<OshopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
