import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbThemeModule,
  NbLayoutModule,
  NbToastrModule,
  NbActionsModule,
  NbContextMenuModule,
  NbMenuModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { ErrorInterceptorProvider } from "./interceptors/error.interceptor";

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: "dark" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot()
  ],
  providers: [ErrorInterceptorProvider],
  declarations: [],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbContextMenuModule,
    NbMenuModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  /**
   * Ensure that CoreModule is only loaded into AppModule
   * @param parentModule
   *
   * Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
   */

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
