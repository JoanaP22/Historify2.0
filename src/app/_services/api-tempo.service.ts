import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTempoService {

  //weahtherApiLink ='https://api.openweathermap.org/data/2.5/weather';
 
 
  weahtherApiLink  =  'https://api.openweathermap.org/data/2.5/forecast';
  //?q=Barcelos,pt&mode=json&appid=27572f5bbca7f98bcd805ae3a4f99413
 
  params = '?q=';
  city : string; //= 'Barcelos';
  country = ',pt';
  apiKey = '&APPID=27572f5bbca7f98bcd805ae3a4f99413'
  celcius = '&units=metric';
  lang = "&lang=pt";

  constructor(private http: HttpClient) { }

baseask(city: string){
  this.city = city;
  return this.http.get(this.weahtherApiLink + this.params + this.city + this.country  + this.apiKey + this.celcius + this.lang);

}

}