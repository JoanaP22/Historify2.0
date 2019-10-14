import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ApiTempoService } from '../_services/api-tempo.service';
import { ApiDBService } from '../_services/api-db.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  historifyDB: ApiDBService;
  myWeather: ApiTempoService;
  public currentUser;
  constructor( public nav: NavBarService,private router: Router,private apiDBService: ApiDBService,
    private apiTempoService: ApiTempoService ) {
      this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';
      this.historifyDB = apiDBService;
      this.myWeather = apiTempoService;
    }
  
  
  ngOnInit() {

    $("#img1-overlay").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });
    this.nav.hide();
  
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse((localStorage.getItem('currentUser'))) : '';


  }
}



