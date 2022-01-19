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
  timestamp: number;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  submit() {
    this.saveUser();
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
