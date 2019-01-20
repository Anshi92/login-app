import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { WelcomeComponent }      from './welcome/welcome.component';
import { LoggedUserComponent }      from './logged-user/logged-user.component';
import { NeedAuthGuard }  from './login-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'logged-user', component: LoggedUserComponent , canActivate: [NeedAuthGuard]  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
