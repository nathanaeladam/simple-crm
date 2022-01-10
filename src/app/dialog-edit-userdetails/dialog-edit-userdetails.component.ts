import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-userdetails',
  templateUrl: './dialog-edit-userdetails.component.html',
  styleUrls: ['./dialog-edit-userdetails.component.scss']
})
export class DialogEditUserdetailsComponent implements OnInit {
  user: User;
  birthDate: Date;
  userId :any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserdetailsComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJson())
    .then(()=>{
      this.loading = false;
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }
}
