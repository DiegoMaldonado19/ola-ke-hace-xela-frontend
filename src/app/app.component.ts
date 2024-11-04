import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ola-ke-hace-xela';

  ngOnInit(): void {
    // Verificar si 'role_name' ya existe en localStorage
    const roleName = localStorage.getItem('role_name');

    if (roleName) {
      // Si existe, asignarlo de nuevo
      console.log(`Role name encontrado: ${roleName}`);
    } else {
      // Si no existe, establecer un valor predeterminado
      localStorage.setItem('role_name', 'Usuario');
      console.log('Role name no encontrado, asignando valor predeterminado: Usuario');
    }
  }
}
