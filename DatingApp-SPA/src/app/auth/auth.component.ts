import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkAuthentication();
  }
  checkAuthentication() {
    if (this.authService.loggedIn()) this.router.navigate(["/members"]);
  }
}
