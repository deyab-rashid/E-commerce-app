import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SellerService} from '../../services/seller/seller-service';
import {Router} from '@angular/router';
import {SellerSignUp} from '../../types/seller-signUp-types/seller-signUp-types';

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

  constructor(private _sellerService: SellerService,
              private _router: Router) {
  }


  signUp(data: SellerSignUp){
    // console.log(data);
    this._sellerService.sellerSignUp(data).subscribe((result)=>{
      // console.warn(result);
      if(result){
          this._router.navigate(['seller-home']);
      }
    });
  }
}
