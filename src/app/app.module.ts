import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user/userlist/userlist.component';
import {UserDetailsComponent} from './user/userdetails/userdetails.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDialogComponent} from './user/user-dialog/user-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './services/user/users.service';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import {ContactsService} from './services/contact/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDialogComponent,
    MessageBoxComponent,
    ContactComponent,
    ContactListComponent,
    ContactDialogComponent
  ],
  entryComponents: [UserDialogComponent,MessageBoxComponent,ContactDialogComponent],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports :[MatButtonModule],
  providers: [UsersService,ContactsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
