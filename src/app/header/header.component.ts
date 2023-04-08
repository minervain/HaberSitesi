import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private newsApi:NewsapiserviceService) { }

  ngOnInit(): void {
  }

  search(searchText:string):void{
    console.log(searchText)

  }
  }



