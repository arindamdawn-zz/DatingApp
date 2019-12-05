import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NbToastrService } from "@nebular/theme";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) return true;
    else {
      this.toastrService.warning(
        "You need to login to view this page",
        "Unauthorized"
      );
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
