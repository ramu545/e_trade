import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.css']
})
export class BottomnavComponent implements OnInit {

  public loginUserName;

  @Input('topnavData') Username ;
  @Output() public chaildevent = new EventEmitter();

  public  loginUser:string="Rami reddy";
  constructor(private authserve:AuthService,private productServices:ProductsService,private dataService:DataService) { }

  ngOnInit() { 
    //this.productServices.getproducts().subscribe();
    console.log('pre test ::: ',this.loginUserName);
    this.dataService.currentUser.subscribe(res => this.loginUserName = res);
    this.dataService.changeMessage(this.loginUser);
    console.log('Post Test ::::',  this.loginUserName);
  }
  sendData():void{
    this.chaildevent.emit(this.loginUser);
  }
  
}