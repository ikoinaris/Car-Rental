import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GEAR_SYSTEM } from 'src/app/models/gear-system';
import { VEHICLE_TYPES } from 'src/app/models/vehicle-types';
import { ExtraService } from 'src/app/services/extra.service';
import { LocationService } from 'src/app/services/location.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-car-rent2',
  templateUrl: './car-rent2.component.html',
  styleUrls: ['./car-rent2.component.css']
})
export class CarRent2Component implements OnInit {

  vehicleTypes = VEHICLE_TYPES;
  gearSystem = GEAR_SYSTEM;
  locations : any;
  extras: any;

  isLinear = false;
  rentCar: FormGroup;
  checked = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _formBuilder: FormBuilder,
              private locationService: LocationService,
              private extrasService : ExtraService) {

    this.rentCar = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.locationService.findAll().subscribe(data => {
      this.locations = data;
    });

    this.extrasService.findAll().subscribe(data => {
      this.extras = data;
    });

    this.rentCar = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  deleteLocation() {
    this.checked = !this.checked;
  }

}
