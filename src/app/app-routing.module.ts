import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { HomeComponent } from './home/home.component';
import { PrimaryComponent } from './primary/primary.component';



const routes: Routes = [{path: 'objetivos', component: ObjetivosComponent},
                        {path: 'home', component: HomeComponent},
                        {path: '', component: HomeComponent}];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
