import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LocalComponent } from './local/local.component';
import { RegistoComponent } from './registo/registo.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TestesComponent } from './testes/testes.component';

import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  //Caso campo esteja por Preencher, reedireciona para HomePage
  {path: '', component: HomePageComponent },

  {path: 'home-page', component: HomePageComponent},
  {path: 'local', component: LocalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'registo', component: RegistoComponent},
  {path: 'sobre-nos', component: SobreNosComponent},

  // PARA ELIMINAR QUANDO PROJECTO ESTIVER CONCLUIDO
  {path: 'testes', component: TestesComponent},
 

  //Caso seja inserido informação inválida, reedireciona para '', que reedireciona para HomePage
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
