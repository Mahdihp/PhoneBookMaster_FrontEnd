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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDialogComponent,
    MessageBoxComponent
  ],
  entryComponents: [UserDialogComponent,MessageBoxComponent],
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
  providers: [UsersService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
