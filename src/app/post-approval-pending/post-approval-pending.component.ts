import {Component, OnInit} from '@angular/core';
import {PostCollectionDTO} from '../models/post.model';
import {PostService} from '../services/post.service';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {ReportCardComponent} from '../report-card/report-card.component';

@Component({
  selector: 'app-post-approval-pending',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    NgIf,
    ReportCardComponent
  ],
  templateUrl: './post-approval-pending.component.html',
  styleUrl: './post-approval-pending.component.css'
})
export class PostApprovalPendingComponent implements OnInit{

    notApprovedPostCollection: PostCollectionDTO = { posts: [] };

    constructor(
      private postService: PostService
    ){ }

    ngOnInit(): void{
        this.postService.getAllNotApprovedPost().subscribe(data => {
          this.notApprovedPostCollection = data;
        });
    }

    approvePost(postId: number){
        this.postService.approvePost(postId).subscribe(
          (response) => {
            console.log('Publicacion aprobada con exito');
          }, (error) => {
            console.log('Publicacion aprobada sin exito');
          }
        )
    }

}
