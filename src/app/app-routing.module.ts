import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUserScreenComponent } from './screens/registro-user-screen/registro-user-screen.component';
import { HomePageScreenComponent } from './screens/home-page-screen/home-page-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroUserScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
