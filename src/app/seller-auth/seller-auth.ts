import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SellerService} from '../../services/seller/seller-service';

@Component({
  selector: 'app-seller-auth',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth {

  constructor(private _sellerService: SellerService) {
  }


  signUp(data: object){
    console.log(data);
    this._sellerService.sellerSignUp(data).subscribe();
  }
}
