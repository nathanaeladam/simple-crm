import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DialogEditBirthdateComponent } from './dialog-edit-birthdate.component';

describe('DialogEditBirthdateComponent', () => {
  let component: DialogEditBirthdateComponent;
  let fixture: ComponentFixture<DialogEditBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule],
      declarations: [DialogEditBirthdateComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
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
