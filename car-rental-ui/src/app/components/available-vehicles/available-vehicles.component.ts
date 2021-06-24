import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AvailableCars } from 'src/app/models/available-cars';
import { AvailableCarsService } from 'src/app/services/available-cars.service';

@Component({
  selector: 'app-available-vehicles',
  templateUrl: './available-vehicles.component.html',
  styleUrls: ['./available-vehicles.component.css']
})
export class AvailableVehiclesComponent implements OnInit {

  availableCars: any;

  constructor(private vehicles : AvailableCarsService) {
  }

  ngOnInit(): void {
    this.availableCars = AvailableCars;
  }

}
