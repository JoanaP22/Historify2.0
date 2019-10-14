import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown-menu a').click(function(){
      $('#selected').text($(this).text());
    });
  }

}
