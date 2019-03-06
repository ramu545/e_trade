import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3030';
  private prodUrl = this.baseUrl+'/products';

  private prodUploadUrl = this.baseUrl+'/products/product';

  constructor(private _httpclient:HttpClient) { }
  public getproducts():Observable<any>{
    return this._httpclient.get<any>(this.prodUrl);
  }

  public uploadProduscts(productDetails):Observable<any>{
    return this._httpclient.post<any>(this.prodUploadUrl,productDetails);
  }

}