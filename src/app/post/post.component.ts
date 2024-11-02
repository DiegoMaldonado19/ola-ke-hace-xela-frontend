import { Component, OnInit } from '@angular/core';
import { PostCollectionDTO } from '../models/post.model';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';
import { UserModelDTO } from '../models/user.model';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButton } from '@angular/material/button';
import { ReportCardComponent } from '../report-card/report-card.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    HttpClientModule,
    NgIf,
    MatButton,
    ReportCardComponent
  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postCollection: PostCollectionDTO = { posts: [] };
  userId: string | null | undefined;
  showReportCard: boolean = false;
  selectedPostId: number | null = null;

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
    this.postService.getAllApprovedPost().subscribe(data => {
      this.postCollection = data;
    });
  }

  openReportCard(postId: number) {
    this.selectedPostId = postId;
    this.showReportCard = true;
  }

  closeReportCard() {
    this.showReportCard = false;
    this.selectedPostId = null;
  }

  loadUserProfile() {
    this.authService.getProfile().subscribe(
      (user: UserModelDTO) => {
        console.log('Perfil cargado:', user);
        this.userId = user.id.toString(); // Guarda el userId aquí si es necesario
        localStorage.setItem('user_id', this.userId); // Guardar userId en localStorage
      },
      (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }

  // Método para manejar el evento reportSubmitted
  handleReportSubmitted(event: { postId: number; comment: string }) {
    console.log('Reporte enviado:', event);
  }
}
