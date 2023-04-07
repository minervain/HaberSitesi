import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  articles: any = [];

  constructor(private _service: NewsapiserviceService) {}

  ngOnInit(): void {
    this._service.techNews().subscribe((result) => {
      this.articles = result.articles;
    });
  }
}
