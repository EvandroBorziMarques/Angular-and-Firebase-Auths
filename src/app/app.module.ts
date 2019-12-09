import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { PrimaryComponent } from './primary/primary.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ObjetivosComponent,
    HomeComponent,
    UserProfileComponent,
    PrimaryComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFireAuthModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule { }
