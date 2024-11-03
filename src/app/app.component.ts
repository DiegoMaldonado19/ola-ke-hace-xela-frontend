import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ola-ke-hace-xela';

  ngOnInit(): void{
    localStorage.setItem('role_name', 'Usuario');
  }

}
