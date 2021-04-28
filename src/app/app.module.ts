import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './component/content/content.component';
import { ThemeToggleService } from './service/theme-toggle.service';
import { LocalStorageManagerService } from './service/local-storage-manager.service';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './component/error-handler/global-error-handler';

export function themeBuilderOnStart(themeToggleSvc: ThemeToggleService) {
  return () => themeToggleSvc.activateOnInit();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ThemeToggleService,
    LocalStorageManagerService, Title, {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    },
    {provide: APP_INITIALIZER, useFactory: themeBuilderOnStart, deps: [ThemeToggleService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
