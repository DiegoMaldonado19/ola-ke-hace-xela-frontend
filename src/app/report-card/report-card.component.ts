import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

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
  @Input() postId: number | null = null;
  @Output() closeCard = new EventEmitter<void>();
  @Output() reportSubmitted = new EventEmitter<{ postId: number; comment: string }>(); // Nuevo EventEmitter
  comment: string = '';

  submitReport() {
    console.log('Comentario enviado:', this.comment);
    this.reportSubmitted.emit({ postId: this.postId!, comment: this.comment }); // Emitir el postId y el comentario
    this.close(); // Cierra la tarjeta después de enviar
  }

  close() {
    this.closeCard.emit(); // Cierra la tarjeta
  }
}
