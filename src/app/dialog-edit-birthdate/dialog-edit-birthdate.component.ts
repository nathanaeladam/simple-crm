import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-birthdate',
  templateUrl: './dialog-edit-birthdate.component.html',
  styleUrls: ['./dialog-edit-birthdate.component.scss']
})
export class DialogEditBirthdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditBirthdateComponent>, private firestore: AngularFirestore) { }
  user: User;
  birthDate: Date;
  userId: any;
  loading = false;

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJson())
      .then(() => {
        this.loading = false;
        this.close();
      })
  }


  close() {
    this.dialogRef.close();
  }
}
