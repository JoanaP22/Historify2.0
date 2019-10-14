import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  smartPhone = false;
 

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    /*private toastr: ToastrService*/) { }

    registerForm: FormGroup;
    loading = false;
    submitted = false;

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

    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userFoto: ['', Validators.required],
      dataNascimento: ['', Validators.required]

  });
  console.log(this.registerForm);

  }
  get fval() { return this.registerForm.controls; }

onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data)=>{
        if(!data['result'])
        {
        //console.log(data);
        alert('Utilizador registado com sucesso!!');
        this.router.navigate(['/login']);
      }
      else
      {
       //console.log(data);
        alert('Já existe um utilizador registado com esse email, favor corrigir!');
       
        this.loading = false;
      }
     }
    )

  }


}
