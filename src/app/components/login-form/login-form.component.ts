import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });

    this.loadAPI();
  }

  loadAPI() {
    const response = {
      email: 'muckystack@gmail.com',
      password: '123123',
      terms: true,
    };

    this.form.patchValue(response);
  }

  send() {
    console.log(this.form.value);
  }
}
