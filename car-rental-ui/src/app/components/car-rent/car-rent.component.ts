import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GEAR_SYSTEM } from 'src/app/models/gear-system';
import { VEHICLE_TYPES } from 'src/app/models/vehicle-types';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.component.html',
  styleUrls: ['./car-rent.component.css']
})
export class CarRentComponent implements OnInit {

  vehicleTypes = VEHICLE_TYPES;
  gearSystem = GEAR_SYSTEM;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  deleteLocation() {
    this.checked = !this.checked;
  }

}
