import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule} from '@agm/core';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms";
//import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { ApiDBService } from './_services/api-db.service';
import { ApiTempoService } from './_services/api-tempo.service';

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
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   // AngularFontAwesomeModule,
    BrowserAnimationsModule, // required animations module
   // ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkeLDt-_T7V6Brc2yADF1fL4HwmRmP6LE'})
    
  ],
  providers: [NavBarService,ApiTempoService,UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
