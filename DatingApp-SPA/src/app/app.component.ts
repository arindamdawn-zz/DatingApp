import { Component } from "@angular/core";
import { AuthService } from "./core/services/auth.service";
import { Router } from "@angular/router";
import { NbMenuService, NbThemeService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  items = [
    { title: "Edit Profile" },
    { title: "Switch Theme" },
    { title: "Logout" }
  ];
  loggedInUsername: string;
  currentTheme: string = "dark";

  constructor(
    public authService: AuthService,
    private router: Router,
    private nbMenuService: NbMenuService,
    private themeService: NbThemeService
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
        switch (title) {
          case "Logout":
            this.logout();
            break;
          case "Edit Profile":
            this.editProfile();
            break;
          case "Switch Theme":
            this.switchTheme();
            break;
        }
      });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  editProfile(): void {
    this.router.navigate(["/members/edit"]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }

  switchTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "default" : "dark";
    this.themeService.changeTheme(this.currentTheme);
  }
}
