import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { User } from "src/app/auth/models/User";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-members-list",
  templateUrl: "./members-list.component.html",
  styleUrls: ["./members-list.component.scss"]
})
export class MembersListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.route.data.subscribe(data => {
      this.users = data["users"];
    });
  }

  handleViewDetails(user: User) {
    if (user) {
      this.router.navigate([`/members/${user.id}`]);
    }
  }
}
