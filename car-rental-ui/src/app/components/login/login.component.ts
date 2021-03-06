import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any;
  isSubmitted = false;

  constructor(private authService : AuthService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls }

  login() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) { return; }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/rent-a-car');
  }

}
