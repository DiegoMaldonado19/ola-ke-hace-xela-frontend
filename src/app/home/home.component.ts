import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = [
    { title: 'Publicación 1', date: '2024-10-01', content: 'Contenido de la publicación 1.' },
    { title: 'Publicación 2', date: '2024-10-02', content: 'Contenido de la publicación 2.' },
    // Agrega más publicaciones según sea necesario
  ];
}
