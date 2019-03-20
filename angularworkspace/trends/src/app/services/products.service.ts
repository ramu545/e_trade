import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3030';
  private prodUrl = this.baseUrl+'/products';

  private prodUploadUrl = this.baseUrl+'/product';

  private dummyUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private _httpclient:HttpClient) { }
  public getproducts():Observable<any>{
    return this._httpclient.get<any>(this.dummyUrl);
  }

  public uploadProduscts(productDetails):Observable<any>{
    return this._httpclient.post<any>(this.prodUploadUrl,productDetails);//.map(res = > res.json())
    console.log(productDetails);
  }

}