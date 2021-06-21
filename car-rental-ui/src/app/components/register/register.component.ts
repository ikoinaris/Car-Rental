import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  isSubmitted = false;

  constructor(private router: Router, private authService: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.value; }

  register() {
    this.isSubmitted = true;
    if ( this.registerForm.invalid ) { return; }
    this.authService.login(this.registerForm.value);
    this.router.navigateByUrl('/car-rental')
  }

}
