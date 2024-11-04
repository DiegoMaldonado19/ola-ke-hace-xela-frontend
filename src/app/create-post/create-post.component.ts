import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { PostCategoryService } from '../services/post-category.service';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { CreatePostDTO } from '../models/post.model';
import { PostCategoryCollectionDTO } from '../models/post-category.model';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatButton,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatOption,
    MatSelect,
    MatNativeDateModule,
    NgForOf
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;

  newPost: CreatePostDTO | null = null;

  categories: PostCategoryCollectionDTO = { category: [] };

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private postCategoryService: PostCategoryService
  ) {

    this.createPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      place: ['', Validators.required],
      start_date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_date: ['', Validators.required],
      end_time: ['', Validators.required],
      capacity_limit: ['', Validators.required],
      category: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.postCategoryService.getAll().subscribe(data => {
      this.categories = data;
    })
  }

  onSubmit() {
    const formValues = this.createPostForm.value;

    const startDateTime = new Date(formValues.start_date);
    const [startHours, startMinutes] = formValues.start_time.split(':');
    startDateTime.setHours(startHours, startMinutes);

    const endDateTime = new Date(formValues.end_date);
    const [endHours, endMinutes] = formValues.end_time.split(':');
    endDateTime.setHours(endHours, endMinutes);

    // Convertir a formato MySQL
    const formatDateTimeForMySQL = (date: Date) => {
      return date.toISOString().slice(0, 19).replace('T', ' ');
    };

    this.newPost = {
      user_id: Number(localStorage.getItem('user_id')),
      title: formValues.title,
      description: formValues.description,
      place: formValues.place,
      start_date_time: formatDateTimeForMySQL(startDateTime),
      end_date_time: formatDateTimeForMySQL(endDateTime),
      capacity_limit: Number(formValues.capacity_limit),
      category_id: formValues.category
    };


    console.log(this.newPost);

    this.postService.create(this.newPost).subscribe(
      response => {
        console.log("Post creado exitosamente: ", response);
      },
      error => {
        console.log("Hubo un error al crear la publicación");
      }
    );

  }

}
