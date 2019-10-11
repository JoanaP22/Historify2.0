import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  smartPhone = false;
 

  constructor() { }

  // FUNÇAO PARA DETECTAR LARGURA DE ECRA E VERIFICAR SE É MENOR QUE 768PX 
  getSmartPhone(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 768;
    console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {

    // MUDANÇA DE VARIAVEL SMARTPHONE PARA SÓ APARECER 'ja tenho conta' EM MOBILE
    this.smartPhone = this.getSmartPhone();
    window.onresize = () => {
      this.smartPhone = this.getSmartPhone();
    };
  }



}
