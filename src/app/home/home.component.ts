import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  articles:any = [];

  ngOnInit(): void {

    this._service.topHeading().subscribe((result => {
      this.articles = result.articles;
    }))
  }

}
