import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logindata = {};
  
  // private userName = new BehaviorSubject<string[]>([]);
  // currentUser = this.userName.asObservable();

  constructor(private authservice:AuthService, private _router:Router) { }

  ngOnInit() {
  }
  public loginuser():void{
    this.authservice.loginUser(this.logindata).subscribe((res)=>{
      if(res.status && res.token){
        localStorage.setItem('jwt-token', res.token);
        //this.userName.next(res.name)
        this._router.navigate(['/products']);
      }else{
        //console.log('errorin condition');
        this._router.navigate(['/login']);
      } 
    },(err)=>{
      console.log(err.message);
    });
  }

}
