import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SellerSignUp} from '../../types/seller-signUp-types/seller-signUp-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl = 'http://localhost:3000';
  seller = this.baseUrl + '/seller';
  constructor(private http: HttpClient) {}

  sellerSignUp(data:SellerSignUp): boolean {
        this.http.post(this.seller,data,{observe: 'response'}).subscribe((result)=>{
          console.warn(result);
      });

      return false;
  }
}
