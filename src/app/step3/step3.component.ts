import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Importações necessárias para standalone
})
export class Step3Component {
  @Output() previous = new EventEmitter<void>(); // Emite evento para página anterior
  @Output() finish = new EventEmitter<void>(); // Emite evento para finalizar

  // Funções para os botões de navegação
  goToPrevious(): void {
    this.previous.emit();
  }

  finishForm(): void {
    this.finish.emit();
  }
}
