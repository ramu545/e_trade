import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produpload',
  templateUrl: './produpload.component.html',
  styleUrls: ['./produpload.component.css']
})
export class ProduploadComponent implements OnInit {
  
  AccConForm: FormGroup;
  @ViewChild('AccUserImg') AccUserImage;
  AccUserImageFile: File;
  
  constructor(private fb: FormBuilder,private prodUpload : ProductsService) { 
    this.AccConForm = this.fb.group({
      'Category': ['', Validators.required],
      'FirstName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(1500)])],
      'LastName': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(1500)])],
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'Mobile': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'Image': [null]
    });
  }

  ngOnInit() {
  } 
  
  public CreateAccContact(value) {
    console.log(JSON.stringify(value));
    const Image = this.AccUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.AccUserImageFile = Image.files[0];
    }
    const ImageFile: File = this.AccUserImageFile;
    console.log(ImageFile);
  }

}
