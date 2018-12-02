import { Component, OnInit } from '@angular/core';
import {UserData} from '../../model/UserData';
import {User} from '../../model/User';
import {ContactData} from '../../model/ContactData';
import {Contact} from '../../model/Contact';
import {UsersService} from '../../services/user/users.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ContactsService} from '../../services/contact/contacts.service';
import {MessageDialog} from '../../model/MessageDialog';
import {MessageBoxComponent} from '../../message-box/message-box.component';
import {UserDialogComponent} from '../../user/user-dialog/user-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['contactId', 'firstName', 'lastName', 'homePhone','mobile','email', 'update', 'delete'];
  contacts: ContactData;
  dataSource: Contact[];

  constructor(private contactService: ContactsService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    this.contactService.getContactList()
      .subscribe(
        resp => {
          this.contacts = resp.body;
          this.dataSource = this.contacts.dataList;

        }
      );
  }


  showDeleteDialog({contactId}: MessageDialog) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    dialogConfig.data = {
      contactId
    };
    const dialogRef = this.dialog.open(MessageBoxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        if (val != null) {
          this.contactService.deleteContact(val.userId).subscribe(
            value => {
              this.loadAllData();
            }
          );
          // console.log(val.userId);
        }
      }
    );
  }

  showUpdateDialog({contactId, firstName, lastName, homePhone,mobile,email}: Contact) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    dialogConfig.data = {
      contactId, firstName, lastName, homePhone,mobile,email
    };
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        if (val != null) {
          this.saveUser(val);
        }
      }
    );
  }
  saveUser(contact: Contact) {
    console.log(contact.contactId + ' afterClosed saveContact ');
    this.contactService.updateContact(contact.contactId, contact).subscribe(
      value => {
        this.loadAllData();
      }
    );
  }
  newUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    dialogConfig.data = {};
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        if (val != null) {
          this.newUser(val);
        }
      }
    );
  }

  private newUser(val: Contact) {
    console.log(val)
    this.contactService.createContact(val).subscribe(value => {
      this.loadAllData();
    });
  }
}
