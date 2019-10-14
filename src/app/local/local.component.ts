import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Comentario} from 'src/app/local/Comentario.model';
import { ServicoComentariosService } from '../servico-comentarios.service';
import { ApiDBService } from '../_services/api-db.service';
import { ApiTempoService } from '../_services/api-tempo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

//Variaveis para preencher o array de objectos Comentarios
  //nome: string;
  srcFoto: string;
  comentario: string;
  rating: number;
  horas: string;
  data: string;
  servicoComentario: ServicoComentariosService;
  src: string;

  concselec: number = 1;
  descConc: string;
  
  local: Array<any>;
  historifyDB: ApiDBService;
  nome: string;
  descricao: string;
  dono_atual: string;
  preco: string;
  horario_func: string;
  site: string;
  foto_principal: string;
  foto_cronol: string;
  latitude: number;
  longitude: number;

 // variáveis tempo

 temp: string;
 stateWeather: string;
 icon = 'http://openweathermap.org/img/wn/';
 iconVal: string;
 type = '@2x.png';
 myWeather: ApiTempoService;
 datahora: string;

  constructor(private router: Router, private apiDBService: ApiDBService, private apiTempoService: ApiTempoService,
    servicoExterno: ServicoComentariosService) {
    this.servicoComentario = servicoExterno;
    this.historifyDB = apiDBService;
    this.myWeather = apiTempoService;
    this.getLocalById();}

//IR BUSCAR DIA E HORAS
today = new Date();

hour = this.today.getHours();
minutes = this.today.getMinutes();
day = this.today.getDay();
month = this.today.getMonth();
year = this.today.getFullYear();


//FUNCAO PARA IR BUSCAR A DATA -> DEVE FUNCIONAR
dataCompl (day: number, month: number, year: number) {
  day = this.day;
  month = this.month;
  year = this.year;

  switch(month){
    case 1: {
      this.data = day + ' de Janeiro de ' + year;
      return this.data;
    }
    case 2: {
      this.data = day + ' de Fevereiro de ' + year;
      return this.data;
    }
    case 3: {
      this.data = day + ' de Março de ' + year;
      return this.data;
    }
    case 4: {
      this.data = day + ' de Abril de ' + year;
      return this.data;
    }
    case 5: {
      this.data = day + ' de Maio de ' + year;
      return this.data;
    }
    case 6: {
      this.data = day + ' de Junho de ' + year;
      return this.data;
    }
    case 7: {
      this.data = day + ' de Julho de ' + year;
      return this.data;
    }
    case 8: {
      this.data = day + ' de Agosto de ' + year;
      return this.data;
    }
    case 9: {
      this.data = day + ' de Setembro de ' + year;
      return this.data;
    }
    case 10: {
      this.data = day + ' de Outubro de ' + year;
      return this.data;
    }
    case 11: {
      this.data = day + ' de Novembro de ' + year;
      return this.data;
    }
    case 12: {
      this.data = day + ' de Dezembro de ' + year;
      return this.data;
    }
  }
}

//FUNCAO PARA IR BUSCAR A HORAS -> FUNCIONA
horario (hour: number, minutes: number){
  hour = this.hour;
  minutes = this.minutes;

  if (minutes < 10)
  { this.horas = hour + ':0' + minutes;
    return this.horas;
  }
  else { this.horas = hour + ':' + minutes;
  return this.horas;
  }
}



enviarComentario() {
  this.servicoComentario.comentarios.push(new Comentario (this.nome, this.srcFoto, this.comentario, this.rating, this.horario(this.hour, this.minutes), this.dataCompl(this.day, this.month, this.year)))

}



getLocalById() {
  const localId = Number(window.localStorage.getItem('id_local'));
  this.historifyDB.getLocalById(localId)
    .subscribe(dados => {
      this.local = [dados];
    });
}
 


// obter dados da api-tempo
getAndFill() {
  this.myWeather.baseask(this.descConc).subscribe(
    data => {
      this.datahora = (data['list']['dt_txt']);
      this.temp = (data['list']['main']['temp']).toFixed(0);
      this.stateWeather = data['list']['weather'][0]['description'];
      this.iconVal = data['list']['weather'][0]['icon'];
      this.src = this.icon + this.iconVal + this.type;
    })
}
/*
getAndFill() {
  this.myWeather.baseask(this.descConc).subscribe(
    data => {
      this.temp = (data['main']['temp']).toFixed(0);
      this.stateWeather = data['weather'][0]['description'];
      this.iconVal = data['weather'][0]['icon'];
      this.src = this.icon + this.iconVal + this.type;
    })
}
*/


  ngOnInit() {
    //Funçao que vai ler os ratings das estrelas
    $(':radio').change(function() {
      console.log('New star rating: ' + this.value);
    });

    this.getLocalById();
    this.getAndFill();
  }

}
