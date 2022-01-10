import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserdetailsComponent } from './dialog-edit-userdetails.component';

describe('DialogEditUserdetailsComponent', () => {
  let component: DialogEditUserdetailsComponent;
  let fixture: ComponentFixture<DialogEditUserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditUserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
