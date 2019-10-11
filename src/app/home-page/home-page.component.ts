import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app//nav-bar.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {



  constructor( public nav: NavBarService ) {}
  
  
  ngOnInit() {

    $("#img1-overlay").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });
    this.nav.hide();
  
  }
}



