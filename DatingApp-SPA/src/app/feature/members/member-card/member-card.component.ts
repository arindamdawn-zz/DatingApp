import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from "@angular/core";
import { User } from "src/app/auth/models/User";

@Component({
  selector: "app-member-card",
  templateUrl: "./member-card.component.html",
  styleUrls: ["./member-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  @Output() viewDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {}

  viewDetails() {
    this.viewDetailsClicked.emit(this.user);
  }
}
