import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app//nav-bar.service';
import { ApiDBService } from '../_services/api-db.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // variáveis ApiDBService
  utilizadores: Array<any>;
  historifyDB: ApiDBService;
  public currentUser ="";

  smartPhone = false;

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

  constructor( public nav: NavBarService,private router: Router,private apiDBService: ApiDBService ) {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';
    this.historifyDB = apiDBService;
    
  }


    // obter dados da API DB
    getUtilizadores() {
      this.historifyDB.getUtilizadores()
        .subscribe(dados => this.utilizadores = dados);
    }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';

      // MUDANÇA DE VARIAVEL SMARTPHONE PARA SÓ APARECER 'ja tenho conta' EM MOBILE
      this.smartPhone = this.getSmartPhone();
      window.onresize = () => {
        this.smartPhone = this.getSmartPhone();
      };
  

  }

}
