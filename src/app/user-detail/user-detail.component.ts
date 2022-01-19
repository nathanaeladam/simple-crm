import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditBirthdateComponent } from '../dialog-edit-birthdate/dialog-edit-birthdate.component';
import { DialogEditUserdetailsComponent } from '../dialog-edit-userdetails/dialog-edit-userdetails.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any;
  user: User = new User();
  userBirthday: string;
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
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

  getUser() {
    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user: any) => {
          this.user = new User(user);
        })
    }
  }

  editUserDetails() {
    let dialog = this.dialog.open(DialogEditUserdetailsComponent);
    dialog.componentInstance.user = this.user;
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
    dialog.componentInstance.userId = this.userId;
  }

  editBirthdate() {
    let dialog = this.dialog.open(DialogEditBirthdateComponent);
    dialog.componentInstance.user = this.user;
    dialog.componentInstance.userId = this.userId;
  }

}
