import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app//nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  smartPhone = false;
  email: string;

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
