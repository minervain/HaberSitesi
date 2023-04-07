import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  articles:any =[];

  constructor(private _service : NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.sportNews().subscribe((result=> {
      this.articles = result.articles;
    }));
  }

}
