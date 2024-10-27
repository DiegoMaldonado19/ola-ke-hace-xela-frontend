import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import {CreatePostDTO, PostModelDTO, UpdatePostDTO, PostCollectionDTO} from '../models/post.model';
import {PostService} from '../services/post.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  postCollection: PostCollectionDTO = {
    posts: []
  }

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getAllApprovedPost().subscribe(data => {
      this.postCollection = data;
    })
  }
}
