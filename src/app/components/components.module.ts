import { WidgetsModule } from './../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormErroresComponent } from './login-form-errores/login-form-errores.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { MyLoginFormErrorComponent } from './my-login-form-error/my-login-form-error.component';



@NgModule({
  declarations: [LoginFormComponent, LoginFormErroresComponent, MyLoginFormErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          
        },
      },
    }),
  ],
  exports: [LoginFormComponent, LoginFormErroresComponent, MyLoginFormErrorComponent],
})
export class ComponentsModule {}
