import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    MatButton
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
