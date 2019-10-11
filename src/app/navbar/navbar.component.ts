import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app//nav-bar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  constructor( public nav: NavBarService ) {}


  ngOnInit() {


  }

}
