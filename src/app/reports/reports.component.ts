import { Component, OnInit } from '@angular/core';
import { PostCollectionDTO } from '../models/post.model';
import { PostService } from '../services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { ReportsByPostComponent } from '../reports-by-post/reports-by-post.component'
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  imports: [
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatCard,
    MatButton,
    MatCardTitle
  ],
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  postCollection: PostCollectionDTO = { posts: [] };

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.postService.getAllApprovedPost().subscribe(data => {
      this.postCollection = data;
    });
  }

  reviewReports(postId: number): void {
    this.dialog.open(ReportsByPostComponent, {
      width: '80%',
      data: { postId: postId }
    });
  }

  removeApproved(postId: number){
    this.postService.disapprovePost(postId).subscribe(
      (response) => {
        console.log("Publicacion desaprobada con exito", response)
      }, (error) => {
        console.log("Ocurrio un error", error)
      }
    );
  }
}
