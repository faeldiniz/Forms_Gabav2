import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  standalone: true, // Tornando o componente standalone
  styleUrls: ['./step1.component.scss'],
  imports: [[CommonModule, ReactiveFormsModule]], // Inclua os módulos necessários
})
export class Step1Component implements OnInit {
  @Output() next = new EventEmitter<void>(); // Certifique-se de que está emitindo corretamente
  discountForm: FormGroup;
  maxAlunos = 2; // Limite de adições
  alunoCount = 1; // Inicialmente há um aluno

  constructor(private fb: FormBuilder, private router: Router) {
    this.discountForm = this.fb.group({
      interview: ['', Validators.required],
      sibling: ['', Validators.required],
      responsavel: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      alunos: this.fb.array([this.createAluno()]) // Inicializa com um aluno
    });
  }

  ngOnInit(): void {}

  createAluno(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      serie: ['', Validators.required],
      dn: ['', Validators.required],
      colegio: ['', Validators.required]
    });
  }

  get alunos(): FormArray {
    return this.discountForm.get('alunos') as FormArray;
  }


  addAluno(): void {
    if (this.alunoCount < this.maxAlunos) {
      this.alunos.push(this.createAluno());
      this.alunoCount++;
    } else {
      alert('Você pode adicionar no máximo 2 alunos.');
    }
  }


 // addAluno(): void {
  //  this.alunos.push(this.createAluno());
 // }

 onNext(): void {

  console.log('Formulário válido:', this.discountForm.valid);
  console.log('Estado do Formulário:', this.discountForm.value);
  
  if (this.discountForm.valid) {
    this.router.navigate(['/step2']); // Navega para a próxima página
  } else {
    console.log('Formulário inválido');
  }
}
}
