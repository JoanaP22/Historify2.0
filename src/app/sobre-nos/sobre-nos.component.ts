import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

    // VARIAVEL FICA TRUE QUANDO A LARGURA DO ECRA É INFERIOR A 1200PX
    smartPhone = false;

    // FUNÇAO PARA DETECTAR LARGURA DE ECRA E VERIFICAR SE É MENOR QUE 768PX 
    getSmartPhone(): boolean {
      const w = document.documentElement.clientWidth;
      const breakpoint = 992;
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
