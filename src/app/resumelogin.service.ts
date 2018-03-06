import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

Injectable()
export class ResumeloginService{
  construtor(private http: Http){}

  myServers(servers: any[]){
    this.http.post('https://resume-loginpage.firebaseio.com/', servers);
  }
}
