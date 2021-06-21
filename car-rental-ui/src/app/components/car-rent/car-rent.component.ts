import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GEAR_SYSTEM } from 'src/app/models/gear-system';
import { VEHICLE_TYPES } from 'src/app/models/vehicle-types';
import { ExtraService } from 'src/app/services/extra.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.component.html',
  styleUrls: ['./car-rent.component.css']
})
export class CarRentComponent implements OnInit {

  vehicleTypes = VEHICLE_TYPES;
  gearSystem = GEAR_SYSTEM;
  locations : any;
  extras: any;

  isLinear = false;
  rentcar: FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService,
              private extrasService : ExtraService) {

    this.rentcar = this.formBuilder.group({
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

    this.rentcar = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  deleteLocation() {
    this.checked = !this.checked;
  }

}
