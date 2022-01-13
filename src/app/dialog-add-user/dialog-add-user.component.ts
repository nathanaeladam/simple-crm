import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  userBirthDate: Date;
  loading = false;
  noSubmit = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  submit() {
    this.saveUser();

  }

  saveUser() {
  /*  if (!this.user.birthDate) {
      alert('we need to know your Birth Date')
      return;
    }*/
    this.loading = true;
    this.user.birthDate = this.userBirthDate.getTime();
    console.log("current user is", this.user);


    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        this.loading = false;
        this.close();
        console.log('save user is finished', result)
      });
  }

  close() {
    this.dialogRef.close();
  }
}
