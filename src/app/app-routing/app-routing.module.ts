import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {ContactComponent} from '../contact/contact.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo : '/users',pathMatch :'full'},
  {path: 'users', component: UserComponent},
  {path: 'contacts', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
