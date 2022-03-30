import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers :new HttpHeaders({
    'Content-Type' : 'application/json'
  })
 };

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }
  public registeruser(data: any)
  {
    return this.http.post(environment.location+'/registeruser',data,httpOption);
  }
  public checkUser(data: any)
  {
    return this.http.post(environment.location+'/checkUser',data,httpOption);
  }
  public getQuestionJson(){
    return this.http.get<any>("assets/question.json")
  }
}
