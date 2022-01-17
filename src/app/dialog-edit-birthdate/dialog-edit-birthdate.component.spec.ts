import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBirthdateComponent } from './dialog-edit-birthdate.component';

describe('DialogEditBirthdateComponent', () => {
  let component: DialogEditBirthdateComponent;
  let fixture: ComponentFixture<DialogEditBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBirthdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
