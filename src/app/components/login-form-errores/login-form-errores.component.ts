import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-errores',
  templateUrl: './login-form-errores.component.html',
  styleUrls: [],
})
export class LoginFormErroresComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      youtube: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
          ),
        ],
      ],
      terms: ['', [Validators.required, Validators.requiredTrue]],
      type: ['Ninguno'],
      color: [''],
    });

    this.loadAPI();
  }

  loadAPI() {
    const response = {
      email: 'muckystack@gmail.com',
      password: '123123',
      terms: true,
      youtube: 'https://www.youtube.com/watch?v=s1qgSzEtCRI',
    };

    this.form.patchValue(response);
  }

  send() {
    if (this.form.valid) {
      console.log('valido');
    } else {
      console.log('invalido');
    }
    console.log(this.form.value);
  }

  changeType() {
    console.log(this.form.value.type);
    if (this.form.value.type === 'Carro') {
      this.form.get('color').setValidators(Validators.required);
    } else {
      this.form.get('color').clearValidators();
    }
    this.form.patchValue({ color: '' });
    this.form.get('color').updateValueAndValidity();
  }
}
