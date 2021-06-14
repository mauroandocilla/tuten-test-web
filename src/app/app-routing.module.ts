import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/authentication/login/login.component";
import {BookingsComponent} from "./components/bookings/bookings.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path: 'bookings', component: BookingsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/bookings', pathMatch: 'full'},
  {path: '**', redirectTo: '/bookings'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {
}
