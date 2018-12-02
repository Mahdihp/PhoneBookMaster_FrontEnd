import { Component, OnInit } from '@angular/core';
import {ContactData} from '../../model/ContactData';
import {Contact} from '../../model/Contact';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ContactsService} from '../../services/contact/contacts.service';
import {MessageDialog} from '../../model/MessageDialog';
import {MessageBoxComponent} from '../../message-box/message-box.component';
import {ContactDialogComponent} from '../contact-dialog/contact-dialog.component';

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
          this.contactService.deleteContact(val.contactId).subscribe(
            value => {
              this.loadAllData();
            }
          );
          // console.log(val.contactId);
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
    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);


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
  newContactDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    dialogConfig.data = {};
    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        if (val != null) {
          this.newContact(val);
        }
      }
    );
  }

  private newContact(val: Contact) {
    console.log(val)
    this.contactService.createContact(val).subscribe(value => {
      this.loadAllData();
    });
  }
}
