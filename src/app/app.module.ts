import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/userlist/userlist.component';
import { UserDetailsComponent } from './user/userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http'; 
import {MatButtonModule, MatDialogModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDialogComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserModule
  ],
  exports :[MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
