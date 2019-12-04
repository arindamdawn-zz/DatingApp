import { Resolve, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "src/app/auth/models/User";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { catchError } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}
  resolve(): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.toastrService.danger("Unable to fetch user details");
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
