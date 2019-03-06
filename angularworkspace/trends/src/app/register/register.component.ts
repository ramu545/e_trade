import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerdata = {};
  constructor(private authservice :AuthService, private _router:Router) { }

  ngOnInit() {
  }
  public register():void{
    this.authservice.registerUser(this.registerdata).subscribe((res)=>{
      if(res.status && res.token){
        sessionStorage.setItem('jwt-token', res.token);
        this._router.navigate(['/products']);
      }
      else{
        this._router.navigate(['/register']);
      }
    },(err)=>{
      console.log(err.message);
    });
  }
}
