import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/auth/models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NbToastrService } from "@nebular/theme";
import { UserService } from "src/app/core/services/user.service";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.scss"]
})
export class MemberEditComponent implements OnInit {
  user: User;
  userEditForm: FormGroup;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.userEditForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private userService: UserService,
    private authSevice: AuthService
  ) {}

  ngOnInit() {
    this.fetchData();
    this.userEditForm = this.fb.group({
      introduction: ["", []],
      lookingFor: ["", []],
      interests: ["", []]
    });
    this.userEditForm.patchValue(this.user);
  }

  get f() {
    return this.userEditForm.controls;
  }

  fetchData() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }

  updateUser() {
    this.user = { ...this.user, ...this.userEditForm.value };
    this.userService
      .updateUser(this.authSevice.decodedToken.nameid, this.userEditForm.value)
      .subscribe(
        next => {
          this.toastrService.success("Profile updated successfully", "Success");
          this.userEditForm.reset(this.user);
        },
        error => {
          this.toastrService.danger(error, "Error");
        }
      );
  }
}
