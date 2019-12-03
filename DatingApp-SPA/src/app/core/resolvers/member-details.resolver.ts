import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from "src/app/auth/models/User";
import { UserService } from "../services/user.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";
import { Injectable } from "@angular/core";

@Injectable()
export class MemberDetailsResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private toastrService: NbToastrService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params["id"]).pipe(
      catchError(error => {
        this.toastrService.danger(
          "There was an error fetching the user details"
        );
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
