import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerUserForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}

  ngOnInit() {
    this.registerUserForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }

  onClickRegister() {
    this.authService.registerUser(this.registerUserForm.value).subscribe(
      next => {
        this.toastrService.success("Successfully Registered", "Register", {
          preventDuplicates: true
        });
        this.router.navigate(["/auth/login"]);
      },
      error => {
        this.toastrService.danger("Failed to register", "Register", {
          preventDuplicates: true
        });
      }
    );
  }
}
