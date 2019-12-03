import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MembersListComponent } from "./members-list/members-list.component";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { MemberDetailsResolver } from "src/app/core/resolvers/member-details.resolver";

const routes: Routes = [
  {
    path: "",
    component: MembersListComponent
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
