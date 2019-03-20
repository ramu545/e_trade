import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray, Validator } from '@angular/forms';

@Component({
  selector: 'app-produpload',
  templateUrl: './produpload.component.html',
  styleUrls: ['./produpload.component.css']
})
export class ProduploadComponent implements OnInit {
  
  public productForm:any=FormGroup;
  selectedFile: File;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  constructor(private prodUpload : ProductsService, private router: Router) { }

  ngOnInit() {
    this.productForm =  new FormGroup({
      pname:new FormControl(),
      ptitle:new FormControl(),
      pcategory:new FormControl(),
      price:new FormControl(),
      pDescription:new FormControl(),
      pimage: new FormControl()
    });
  } 
  
  uploadProduct():void{
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('pimage', this.selectedFile);
    
    let imgname = formData.get('pimage');
    this.productForm.value.pimage = imgname;
    this.prodUpload.uploadProduscts(this.selectedFile).subscribe((res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    });
  }

}
