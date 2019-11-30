import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loading = false;
  loginUserForm: FormGroup;
  alertMsg: string;
  authenticated: boolean = null;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginUserForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  o;
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }

  onClickLogin() {
    this.authService.loginUser(this.loginUserForm.value).subscribe(
      next => {
        this.alertMsg = "Successfully logged in";
        this.authenticated = true;
      },
      error => {
        this.alertMsg = "Failed to login";
        this.authenticated = false;
      }
    );
  }
}
