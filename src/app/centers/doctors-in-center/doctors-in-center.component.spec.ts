import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsInCenterComponent } from './doctors-in-center.component';

describe('DoctorsInCenterComponent', () => {
  let component: DoctorsInCenterComponent;
  let fixture: ComponentFixture<DoctorsInCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsInCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsInCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
