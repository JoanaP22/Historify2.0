import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
       // MUDANÇA DE VARIAVEL SMARTPHONE PARA APARECER FORMATO MOBILE
       this.smartPhone = this.getSmartPhone();
       window.onresize = () => {
         this.smartPhone = this.getSmartPhone();
       };
   
  }

}
