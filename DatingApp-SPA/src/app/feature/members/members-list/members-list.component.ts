import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { User } from "src/app/auth/models/User";
import { Router } from "@angular/router";

@Component({
  selector: "app-members-list",
  templateUrl: "./members-list.component.html",
  styleUrls: ["./members-list.component.scss"]
})
export class MembersListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      next => {
        this.users = next;
        console.log(this.users);
      },
      error => console.log(error)
    );
  }

  handleViewDetails(user: User) {
    if (user) {
      this.router.navigate([`/members/${user.id}`]);
    }
  }
}
