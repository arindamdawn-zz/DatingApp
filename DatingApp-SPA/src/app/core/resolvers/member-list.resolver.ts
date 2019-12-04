import { Resolve, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "src/app/auth/models/User";
import { Observable, of } from "rxjs";
import { UserService } from "../services/user.service";
import { catchError } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}
  resolve(): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError(error => {
        this.toastrService.danger("There was an error fetching members");
        localStorage.clear();
        this.router.navigate(["/auth/login"]);
        return of(null);
      })
    );
  }
}
