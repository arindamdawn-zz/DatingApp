import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MembersListComponent } from "./members-list/members-list.component";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { MemberDetailsResolver } from "src/app/core/resolvers/member-details.resolver";
import { MemberListResolver } from "src/app/core/resolvers/member-list.resolver";
import { MemberEditComponent } from "./member-edit/member-edit.component";
import { MemberEditResolver } from "src/app/core/resolvers/member-edit.resolver";
import { PreventUnsavedChangesGuard } from "src/app/core/guards/prevent-unsaved-changes.guard";

const routes: Routes = [
  {
    path: "",
    component: MembersListComponent,
    resolve: {
      users: MemberListResolver
    }
  },
  {
    path: "edit",
    component: MemberEditComponent,
    resolve: {
      user: MemberEditResolver
    },
    canDeactivate: [PreventUnsavedChangesGuard]
  },
  {
    path: ":id",
    component: MemberDetailsComponent,
    resolve: {
      user: MemberDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule {}
