import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  standalone: true, // Tornando o componente standalone
  imports: [[CommonModule, ReactiveFormsModule, FormsModule]], // Inclua os módulos necessários
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})

export class Step2Component {
  @Output() previous = new EventEmitter<void>(); // Emite evento para página anterior
  @Output() next = new EventEmitter<void>(); // Emite evento para próxima página

  // Funções para os botões de navegação
  goToPrevious(): void {
    this.previous.emit();
  }

  goToNext(): void {
    this.next.emit();
  }
}
