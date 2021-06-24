import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvailableCars } from 'src/app/models/available-cars';
import { GEAR_SYSTEM } from 'src/app/models/gear-system';
import { VEHICLE_TYPES } from 'src/app/models/vehicle-types';
import { AvailableCarsService } from 'src/app/services/available-cars.service';
import { ExtraService } from 'src/app/services/extra.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.component.html',
  styleUrls: ['./car-rent.component.css']
})
export class CarRentComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  vehicleTypes = VEHICLE_TYPES;
  gearSystem = GEAR_SYSTEM;
  locations : any;
  extras: any;
  avalableCars: AvailableCars[];
  isLinear = false;
  rentcar: FormGroup;
  checked = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private locationService: LocationService,
              private extrasService : ExtraService,
              private availableVehicles : AvailableCarsService) {

    this.rentcar = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.avalableCars = [];
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

  onProcceed() {
    let params = new HttpParams();
    params = params.append('type', "");
    params = params.append('gear', "");
    params = params.append('pickUpDate', "");
    params = params.append('checkOutDate', "");
    this.availableVehicles.findAvailableCars(params).subscribe(data => this.avalableCars = data);
    this.router.navigateByUrl('/available-cars');
  }

  deleteLocation() {
    this.checked = !this.checked;
  }

}
