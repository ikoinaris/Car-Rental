import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableVehiclesComponent } from './components/available-vehicles/available-vehicles.component';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import { CarRent2Component } from './components/car-rent2/car-rent2.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: CarRentComponent},
  { path: 'rent-a-car', component: CarRentComponent},
  { path: 'available-cars', component: AvailableVehiclesComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
