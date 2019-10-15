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

  // variáveis ApiDBService
  utilizadores: Array<any>;
  concelhos: Array<any>;
  locais: Array<any>;


  concselec: number = 1;
  descConc: string;
  show: boolean;
  // variáveis para mapa

  latitudeAtual: number;
  longitudeAtual: number;
  zoom: number = 15;
 // latitude: number ;
 // longitude: number ;
  latitude: number = 41.5317;
  longitude: number = -8.6179;

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

  constructor( public nav: NavBarService,private router: Router,
    private apiDBService: ApiDBService,
    private apiTempoService: ApiTempoService ) {
      this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';
      this.historifyDB = apiDBService;
      this.myWeather = apiTempoService;
    }
  
    getConcelhos() {
      this.historifyDB.getConcelhos()
        .subscribe(dados => this.concelhos = dados);
    }
  
    getConcelho(id: number) {
      this.historifyDB.getConcelhoById(id)
        .subscribe(dados => {
          this.descConc = dados['descricao'];
          this.latitude = dados['latitude'];
         this.longitude = dados['longitude'];
        })
    }
  
    getLocais() {
      this.historifyDB.getLocais()
        .subscribe(dados => this.locais = dados);
    }
  
   
  
    // localização atual do  utilizador
  
    getLocation(): void {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.longitudeAtual = (position.coords.longitude);
          this.latitudeAtual = position.coords.latitude;
  
        });
      } else {
        alert('Geolocalização nao suportada...')
      }
    }
  
  
    public onChange(event): void {  // event will give you full breif of action
      this.concselec = event.target.value;
      console.log(this.concselec);
    }
  
    public onClick(id: number) {  // guarda na variável concselec a id do concelho seleccionado
      this.concselec = id;
      this.getConcelho(id);
      //this.getAndFill();
    }
  
    public onClickL(id: number) {  // guarda o id do local seleccionado
      window.localStorage.setItem('id_local', id.toString());
      this.router.navigate(['local']);
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

  
    $('.dropdown-menu a').click(function(){
      $('#selected').text($(this).text());
    });

    this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';
    this.getConcelhos();
    this.getConcelho(this.concselec);
    this.getLocais();
   
    this.getLocation();

  }
}



