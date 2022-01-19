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
  userBirthDate: Date;
  userId: any;
  timestamp: number;

  loading = false;

  ngOnInit(): void {
  }



  timeConverter(x: number) {
    var a = new Date(x);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

  saveUser() {
    this.loading = true;
    this.timestamp = this.userBirthDate.getTime();
    this.user.birthDate = this.timeConverter(this.timestamp);

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
