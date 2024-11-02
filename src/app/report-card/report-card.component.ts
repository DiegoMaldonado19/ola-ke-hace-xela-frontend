import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { PostService } from '../services/post.service';
import { ReportService } from '../services/report.service';
import { CreateReportDTO } from '../models/report.model';
import { UpdatePostDTO, PostModelDTO } from '../models/post.model';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [
    FormsModule,
    MatButton
  ],
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent {
  @Input() postId: number = 0
  @Output() closeCard = new EventEmitter<void>();
  @Output() reportSubmitted = new EventEmitter<{ postId: number; comment: string }>();
  comment: string = '';

  constructor(
    private postService: PostService,
    private reportService: ReportService
  ) { }

  submitReport() {
    if (this.postId !== null) {
      this.postService.getPostById(this.postId).subscribe(
        (post: PostModelDTO) => {
          console.log(post);

          let strikeCount = ++post.post_strike_count;

          const postUpdated: UpdatePostDTO = {
            user_id: Number(post.user.id),
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

          console.log(postUpdated);

          const newReport: CreateReportDTO = {
            post_id: post.id,
            user_id: Number(localStorage.getItem('user_id')), // Obtener userId del localStorage
            comment: this.comment
          };

          console.log(newReport);

          this.postService.update(postUpdated, this.postId).subscribe(
            (response) => {
              console.log('Post actualizado:', response);
              this.reportService.create(newReport).subscribe(
                (reportResponse) => {
                  console.log('Reporte creado:', reportResponse);
                  this.reportSubmitted.emit({ postId: this.postId!, comment: this.comment });
                  this.close();
                },
                (error) => {
                  console.error('Error al crear el reporte:', error);
                }
              );
            },
            (error) => {
              console.error('Error al actualizar el post:', error);
            }
          );
        },
        (error) => {
          console.error('Error al obtener el post:', error);
        }
      );
    }
  }

  close() {
    this.closeCard.emit();
  }
}
