import { Injectable } from '@angular/core';
import {Comentario} from 'src/app/local/Comentario.model';


@Injectable({
  providedIn: 'root'
})
export class ServicoComentariosService {

  comentarios: Array <Comentario> = [
    
  ]

  constructor() { }
}
