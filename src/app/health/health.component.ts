import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  articles:any =[];

  constructor(private _service : NewsapiserviceService) { }

  ngOnInit(): void {
    this._service.healthNews().subscribe((result=> {
      this.articles = result.articles;
    }));
  }

}
