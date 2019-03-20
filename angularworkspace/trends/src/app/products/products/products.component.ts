import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any[]=[];
  public empname:string;
  constructor(private productServices:ProductsService,private router : Router) { }

  ngOnInit() {
    this.productServices.getproducts().subscribe((res)=>{
      this.products = res;
      localStorage.setItem("username",res.name);
    },(err)=>{
      this.router.navigate(['/login']);
    });
  }
  prodform(){
    this.router.navigate(['/product']);
  }
  serach(){
    if(this.empname != ""){
      this.products = this.products.filter(res=>{
        //console.log(res);
        //return res.empname.toLocaleLowerCase().match(this.products.toLocaleLowerCase());
      });
    }else if(this.empname == ""){
      this.ngOnInit();
    }
  }
}
