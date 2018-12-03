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
  MatDialogModule, MatGridListModule,
  MatInputModule, MatMenuModule, MatSelectModule,
  MatTableModule, MatToolbarModule
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
import {AppRoutingModule} from './app-routing/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    ContactDialogComponent,
    NotFoundComponent
  ],
  entryComponents: [UserDialogComponent,MessageBoxComponent,ContactDialogComponent],
  imports: [
    AppRoutingModule,
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
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports :[MatButtonModule],
  providers: [UsersService,ContactsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
