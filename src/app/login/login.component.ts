import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app//nav-bar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  smartPhone = false;
  email: string;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

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

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }
// for accessing to form fields
get fval() { return this.loginForm.controls; }

onFormSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
  }

  this.loading = true;
  this.authenticationService.login(this.fval.email.value, this.fval.password.value)
    .subscribe(
      data => {
        if (data['result']) {
          this.router.navigate(['/']);
        }
        else {
          alert('Email ou password incorreto(s), favor corrigir!');
          this.loading = false;
        }
      }

    )

}

}
