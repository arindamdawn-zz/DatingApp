import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";
import { NbMenuService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  items = [
    {
      title: "Logout"
    }
  ];
  loggedInUsername: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private nbMenuService: NbMenuService
  ) {}

  ngOnInit(): void {
    this.triggerMenuService();
    this.authService.loggedIn();
  }

  triggerMenuService() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "user"),
        map(({ item: { title } }) => title)
      )
      .subscribe(title => {
        if (title === "Logout") this.logout();
      });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
