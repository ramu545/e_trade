import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servivces/products.service';

@Component({
  selector: 'app-produpload',
  templateUrl: './produpload.component.html',
  styleUrls: ['./produpload.component.css']
})
export class ProduploadComponent implements OnInit {
  
  public productData = {};
  
  constructor(private prodUpload : ProductsService) { }

  ngOnInit() {
  }
  
  public uploadProduct():void{
    console.log(this.productData);
    this.prodUpload.uploadProduscts(this.productData).subscribe((res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err.message);
    });
  }

}
