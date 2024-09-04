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

export class Step2Component implements OnInit {

  @Output() next = new EventEmitter<void>(); // Certifique-se de que está emitindo corretamente
  discountForm: FormGroup;
  maxResponsavel = 2; // Limite de adições
  alunoCount = 1; // Inicialmente há um aluno

  constructor(private fb: FormBuilder, private router: Router) {
    this.discountForm = this.fb.group({
      interview: ['', Validators.required],
      sibling: ['', Validators.required],
      responsavel: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      responsaveis: this.fb.array([this.createResponsavel()]) // Inicializa com um aluno
    });
  }

  // @Output() previous = new EventEmitter<void>(); // Emite evento para página anterior
  // @Output() next = new EventEmitter<void>(); // Emite evento para próxima página

  ngOnInit(): void {}

  createResponsavel(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      serie: ['', Validators.required],
      dn: ['', Validators.required],
      colegio: ['', Validators.required]
    });
  }

  get responsavel(): FormArray {
    return this.discountForm.get('responsavel') as FormArray;
  }

  addResponsavel(): void {
    if(this.alunoCount < this.maxResponsavel) {
    this.responsavel.push(this.createResponsavel());
    this.alunoCount++;
  } else {
    alert('Você pode adicionar no máximo 2 responsaveis.');
  }
}

onNext(): void {

  console.log('Formulário válido:', this.discountForm.valid);
  console.log('Estado do Formulário:', this.discountForm.value);
  
  if (this.discountForm.valid) {
    this.router.navigate(['/step3']); // Navega para a próxima página
  } else {
    console.log('Formulário inválido');
  }
}

// // Funções para os botões de navegação
// goToPrevious(): void {
//   this.previous.emit();
// }

// goToNext(): void {
//   this.next.emit();
// }
}
  




 


