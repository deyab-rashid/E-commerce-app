import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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

  signUp(data: any){
    console.log(data);
  }
}
