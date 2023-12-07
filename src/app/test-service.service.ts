import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestServiceService {
  private fetchEvent: EventEmitter<any> = new EventEmitter() 
  private url: string = "http://localhost:3000/element-list"

  constructor(private httpClient: HttpClient) { }

  fetchData(){ 
    return this.httpClient.get(this.url) }
}
