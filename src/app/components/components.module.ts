import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormErroresComponent } from './login-form-errores/login-form-errores.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';



@NgModule({
  declarations: [LoginFormComponent, LoginFormErroresComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'El campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: (error) => `Address isn't valid`,
        },
      },
    }),
  ],
  exports: [LoginFormComponent, LoginFormErroresComponent],
})
export class ComponentsModule {}
