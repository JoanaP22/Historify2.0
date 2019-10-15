import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ApiTempoService } from '../_services/api-tempo.service';
import { ApiDBService } from '../_services/api-db.service';
import { Router} from "@angular/router";
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    // VARIAVEL FICA TRUE QUANDO A LARGURA DO ECRA É INFERIOR A 1200PX
    smartPhone = false;

  // VARIAVEL SO FICA TRUE QUANDO É ACIONADA ALGUMA PESQUISA
    pesquisa = true;
  
  // FUNÇAO PARA DETECTAR LARGURA DE ECRA E VERIFICAR SE É MENOR QUE 768PX 
    getSmartPhone(): boolean {
      const w = document.documentElement.clientWidth;
      const breakpoint = 1199;
      console.log(w);
      if (w < breakpoint) {
        return true;
      } else {
        return false;
      }
    }

  historifyDB: ApiDBService;
  myWeather: ApiTempoService;
  public currentUser;
  constructor( public nav: NavBarService,private router: Router,private apiDBService: ApiDBService,
    private apiTempoService: ApiTempoService ) {
      this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';
      this.historifyDB = apiDBService;
      this.myWeather = apiTempoService;
    }
  
  
  ngOnInit() {

           // MUDANÇA DE VARIAVEL SMARTPHONE PARA SÓ APARECER 'ja tenho conta' EM MOBILE
           this.smartPhone = this.getSmartPhone();
           window.onresize = () => {
             this.smartPhone = this.getSmartPhone();
           };

    $("#img1-overlay").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });

  
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';


  }
}



