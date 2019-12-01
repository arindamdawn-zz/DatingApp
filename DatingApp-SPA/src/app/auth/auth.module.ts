import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule
} from "@nebular/theme";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {}
