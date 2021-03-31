import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = "https://4ddbe6650e90.ngrok.io/api/v1/ads";
const endpoint2 = "https://4ddbe6650e90.ngrok.io/api/v1/news";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getAds(){
    return this.http.get(endpoint);
  }

  public getNews(){
    return this.http.get(endpoint2);
  }


  public CreateAds(uploadData){
    return this.http.post<any>(endpoint, uploadData);
  }
}


