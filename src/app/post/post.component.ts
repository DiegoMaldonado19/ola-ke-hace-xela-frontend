import { Component, OnInit } from '@angular/core';
import { PostModelDTO, UpdatePostDTO, PostCollectionDTO } from '../models/post.model';
import { PostService } from '../services/post.service';
import { ReportService } from '../services/report.service';
import { CreateReportDTO } from '../models/report.model';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButton } from '@angular/material/button';
import { ReportCardComponent } from '../report-card/report-card.component';
import { AuthService } from '../services/auth.service';
import { UserModelDTO } from '../models/user.model';

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
    private reportService: ReportService,
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
      },
      (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }

  postOnReport(post_id: number, post: PostModelDTO, comment: string) {
    let strikeCount = post.post_strike_count++;

    const postUpdated: UpdatePostDTO = {
      title: post.title,
      description: post.description,
      place: post.place,
      start_date_time: post.start_date_time,
      end_date_time: post.end_date_time,
      capacity_limit: post.capacity_limit,
      category_id: post.category.id,
      post_strike_count: strikeCount,
      approved: post.approved
    };

    const newReport: CreateReportDTO = {
      post_id: post.id,
      user_id: Number(this.userId),
      comment: comment
    };

    // Llamada a update y luego a create
    this.postService.update(post_id, postUpdated).subscribe(
      (response) => {
        console.log('Post actualizado:', response);
        if (newReport) {
          this.reportService.create(newReport).subscribe(
            (reportResponse) => {
              console.log('Reporte creado:', reportResponse);
            },
            (error) => {
              console.error('Error al crear el reporte:', error);
            }
          );
        } else {
          console.error('newReport es null, no se puede crear el reporte.');
        }
      },
      (error) => {
        console.error('Error al actualizar el post:', error);
      }
    );
  }

  // Método para manejar el evento reportSubmitted
  handleReportSubmitted(event: { postId: number; comment: string }) {
    this.postOnReport(event.postId, this.postCollection.posts.find(post => post.id === event.postId)!, event.comment);
  }
}
