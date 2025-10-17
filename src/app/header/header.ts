import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
