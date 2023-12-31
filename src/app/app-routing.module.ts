import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about-page/about/about.component';
import { RedirectComponent } from './RedirectPage/redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import {
  authenticationGuard,
  notAuthenticationGuard,
} from './authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./service-page/service-page.module').then(
        (m) => m.ServicePageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
    canActivate: [notAuthenticationGuard],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'signIn',
    component: LoginComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [notAuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
