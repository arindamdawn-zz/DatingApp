import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  {
    path: "members",
    loadChildren: () =>
      import("./feature/members/members.module").then(m => m.MembersModule)
  },
  {
    path: "lists",
    loadChildren: () =>
      import("./feature/lists/lists.module").then(m => m.ListsModule)
  },
  {
    path: "messages",
    loadChildren: () =>
      import("./feature/messages/messages.module").then(m => m.MessagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
