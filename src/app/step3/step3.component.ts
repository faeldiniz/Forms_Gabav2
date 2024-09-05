import { Component,OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Importações necessárias para standalone
})

  export class Step3Component implements OnInit {
    step3Form: FormGroup;

    // @Output() previous = new EventEmitter<void>(); // Emite evento para página anterior
  // @Output() finish = new EventEmitter<void>(); // Emite evento para finalizar

  
    constructor(private fb: FormBuilder, private router: Router) {
      this.step3Form = this.fb.group({
        outrasRendas: ['', Validators.required],
        valorRenda: ['', [Validators.required, Validators.min(0)]],
        motivos: ['', Validators.required],
        comprovante: [null]  // Para receber o arquivo anexado
      });
    }
  
    ngOnInit(): void {
      console.log('Step3 Component Initialized');
    }
  
    goToPrevious(): void {
      // Lógica para navegar para a página anterior
      this.router.navigate(['/step2']);
    }
  
    finishForm(): void {
      if (this.step3Form.valid) {
        console.log('Formulário finalizado:', this.step3Form.value);
        // Implementar lógica de envio dos dados ou finalização do wizard
      } else {
        console.log('Formulário inválido');
        this.step3Form.markAllAsTouched();
      }
    }
  }
  // Funções para os botões de navegação
  // goToPrevious(): void {
  //   this.previous.emit();
  // }

  // finishForm(): void {
  //   this.finish.emit();
  // }

