import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3030';
  private registerurl = this.baseUrl+'/register';
  private loginrurl = this.baseUrl+'/login';
  
  constructor(private _http: HttpClient,private _router:Router) { }
  
  public registerUser(user):Observable<any>{
    return this._http.post<any>(this.registerurl,user);
  }

  public loginUser(user):Observable<any>{
    return this._http.post<any>(this.loginrurl,user);
  }

  public loggedIn():boolean{
    var tokenl = localStorage.getItem('jwt-token');
    var tokens = sessionStorage.getItem('jwt-token');

    if(tokenl || tokens){
      return true;
    }
    else{
      return false;
    }
  }

  public logOut():void{
    localStorage.removeItem('jwt-token');
    sessionStorage.removeItem('jwt-token');
    this._router.navigate(['/login']);
  }
}
