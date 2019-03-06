import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productServices:ProductsService,private router : Router) { }

  ngOnInit() {
    this.productServices.getproducts().subscribe((res)=>{
      console.log(res);
    },(err)=>{
      this.router.navigate(['/login']);
      console.log(err.status+'  '+err.statusText);
    });
  }
  prodform(){
    this.router.navigate(['/products/product']);
  }
}
