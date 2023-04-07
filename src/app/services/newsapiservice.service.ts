import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
  private newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971';
  private techApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=676f017549224f488970f1835f9db971';
  private businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=676f017549224f488970f1835f9db971';
  private healthApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=676f017549224f488970f1835f9db971';
  private sportApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=676f017549224f488970f1835f9db971';



  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews() :Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews() :Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
  healthNews() :Observable<any>{
    return this._http.get(this.healthApiUrl)
  }
  sportNews() :Observable<any>{
    return this._http.get(this.sportApiUrl)
  }

}
