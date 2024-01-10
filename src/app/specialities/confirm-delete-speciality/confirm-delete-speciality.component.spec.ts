import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteSpecialityComponent } from './confirm-delete-speciality.component';

describe('ConfirmDeleteSpecialityComponent', () => {
  let component: ConfirmDeleteSpecialityComponent;
  let fixture: ComponentFixture<ConfirmDeleteSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
