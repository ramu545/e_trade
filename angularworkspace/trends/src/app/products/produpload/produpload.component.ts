import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-produpload',
  templateUrl: './produpload.component.html',
  styleUrls: ['./produpload.component.css']
})
export class ProduploadComponent implements OnInit {
  
  public productData = {};
  
  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  constructor(private prodUpload : ProductsService) { }

  ngOnInit() {
  } 
  
  public uploadProduct():void{
    console.log(this.productData);
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile);
    let imgname = uploadData.get('image');
    this.prodUpload.uploadProduscts(uploadData).subscribe((res)=>{
      //console.log(res);
    },
    (err)=>{
      console.log(err.message);
    });
  }

}
