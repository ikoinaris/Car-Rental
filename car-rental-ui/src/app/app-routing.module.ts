import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'rent-a-car', component: CarRentComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
