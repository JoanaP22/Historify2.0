
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
//import { Sugestao } from './sugestoes/sugestao';

@Injectable({
  providedIn: 'root'
})
export class ApiDBService {
base = 'http://localhost:5000/api/'
utilizadoresURL = this.base +'utilizador/';

 concelhosURL = this.base +'concelho/';

locaisURL = this.base +'local/';

sugestoesLocaisURL =this.base + 'sugestao_local/';


  constructor(private http: HttpClient) { }

  getUtilizadores() {

    return this.http.get<any[]>(this.utilizadoresURL);
  }

  getConcelhos() {

    return this.http.get<any[]>(this.concelhosURL);
  }

  getConcelhoById(id: number) {

    return this.http.get<any[]>(this.concelhosURL + id);
 }


  getLocais() {

    return this.http.get<any[]>(this.locaisURL);
  }

  getLocalById(id: number) {

    return this.http.get<any[]>(this.locaisURL + id);
  }
/*
createSugestao(sugestao: Sugestao){
  return this.http.post(this.sugestoesLocaisURL, sugestao);
}*/

}
