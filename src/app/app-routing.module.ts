import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { PrimaryComponent } from './primary/primary.component';



const routes: Routes = [{path: 'objetivos', component: ObjetivosComponent, canActivate: [AuthGuard]},
                        {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
                        {path: '', component: UserProfileComponent}];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
