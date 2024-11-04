import {Component, Inject, Input, OnInit} from '@angular/core';
import { ReportService } from '../services/report.service';
import { ReportCollectionDTO } from '../models/report.model';
import {NgForOf, NgIf} from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-reports-by-post',
  standalone: true,
  templateUrl: './reports-by-post.component.html',
  imports: [
    NgForOf,
    NgIf,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton
  ],
  styleUrls: ['./reports-by-post.component.css']
})
export class ReportsByPostComponent implements OnInit {

  reportCollection: ReportCollectionDTO = { reports: [] };

  constructor(
    private reportService: ReportService,
    public dialogRef: MatDialogRef<ReportsByPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { postId: number }
  ) { }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReportsByPostId(this.data.postId).subscribe(data => {
      this.reportCollection = data;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
