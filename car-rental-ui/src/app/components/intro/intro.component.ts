import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRentCar() {
    this.router.navigateByUrl('/rent-a-car');
  }

}
