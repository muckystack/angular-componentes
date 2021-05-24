import { WidgetsModule } from './../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormErroresComponent } from './login-form-errores/login-form-errores.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { MyLoginFormErrorComponent } from './my-login-form-error/my-login-form-error.component';
import { DirectivesComponent } from './directives/directives.component';
import { BreakImgDirective } from './directives/break-img.directive';
import { ViewChildDOMComponent } from './view-child-dom/view-child-dom.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormErroresComponent,
    MyLoginFormErrorComponent,
    DirectivesComponent,
    BreakImgDirective,
    ViewChildDOMComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {},
      },
    }),
  ],
  exports: [
    LoginFormComponent,
    LoginFormErroresComponent,
    MyLoginFormErrorComponent,
    DirectivesComponent,
    ViewChildDOMComponent
  ],
})
export class ComponentsModule {}
