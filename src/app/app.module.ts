import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LocalComponent } from './local/local.component';
import { LoginComponent } from './login/login.component'
import { NavBarService } from './nav-bar.service';
import { RegistoComponent } from './registo/registo.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LocalComponent,
    LoginComponent,
    RegistoComponent,
    SobreNosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NavBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
