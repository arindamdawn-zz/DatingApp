import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbCardModule, NbIconModule, NbTabsetModule, NbInputModule, NbAlertModule } from "@nebular/theme";
import { MembersListComponent } from "./members-list/members-list.component";
import { MemberCardComponent } from "./member-card/member-card.component";
import { MembersRoutingModule } from "./members-routing.module";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { MemberDetailsResolver } from "src/app/core/resolvers/member-details.resolver";
import { GalleryModule } from "@ngx-gallery/core";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberListResolver } from "src/app/core/resolvers/member-list.resolver";
import { MemberEditResolver } from "src/app/core/resolvers/member-edit.resolver";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    GalleryModule,
    ReactiveFormsModule,
    NbInputModule,
    NbAlertModule
  ],
  declarations: [
    MembersListComponent,
    MemberCardComponent,
    MemberDetailsComponent,
    MemberEditComponent
  ],
  providers: [MemberDetailsResolver, MemberListResolver, MemberEditResolver]
})
export class MembersModule {}
