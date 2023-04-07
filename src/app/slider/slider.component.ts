import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  constructor(private _service:NewsapiserviceService) { }

  articles:any = [];

  ngOnInit(): void {

    this._service.topHeading().subscribe((result => {
      this.articles = result.articles;
    }))
  }

}
