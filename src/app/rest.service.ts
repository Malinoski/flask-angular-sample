import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  dataUrl : string = "http://127.0.0.1:5000/data/";

  constructor(private http : HttpClient) { }

  ngOnInit(){
    
  }

  readData() {
    return this.http.get<Data[]>(this.dataUrl);
  }

}
