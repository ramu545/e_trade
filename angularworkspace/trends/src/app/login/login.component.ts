import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logindata = {};
  constructor(private authservice:AuthService, private _router:Router) { }

  ngOnInit() {
  }
  public loginuser():void{
    this.authservice.loginUser(this.logindata).subscribe((res)=>{
      //console.log(this.logindata);
      if(res.status && res.token){
        localStorage.setItem('token', res.token);
        this._router.navigate(['/products']);
      }else{
        console.log('errorin condition');
        this._router.navigate(['/login']);
      } 
    },(err)=>{
      console.log(err.message);
    });
  }
}
