import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/auth/models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.scss"]
})
export class MemberEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  user: User;
  userEditForm: FormGroup;

  ngOnInit() {
    this.fetchData();
    this.userEditForm = this.fb.group({
      description: [this.user.introduction, []],
      lookingFor: [this.user.lookingFor, []],
      interests: [this.user.interests, []]
    });
  }

  fetchData() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }
}
