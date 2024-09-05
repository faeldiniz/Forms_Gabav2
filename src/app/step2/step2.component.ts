import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  standalone: true, // Tornando o componente standalone
  imports: [[CommonModule, ReactiveFormsModule, FormsModule]], // Inclua os módulos necessários
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})

export class Step2Component implements OnInit {

  @Output() next = new EventEmitter<void>(); // Certifique-se de que está emitindo corretamente
  discountForm: FormGroup;
  maxResponsaveis = 2; // Limite de adições
  responsavelCount = 1; // Inicialmente há um responsavel

  constructor(private fb: FormBuilder, private router: Router) {
    this.discountForm = this.fb.group({
      interview: ['', Validators.required],
      sibling: ['', Validators.required],
      responsaveis: this.fb.array([this.createResponsavel()]) // Inicializa com um responsavel
    });
  }

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.discountForm = this.fb.group({
  //     interview: ['', Validators.required],
  //     sibling: ['', Validators.required],
  //     responsavel: ['', Validators.required],
  //     //cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
  //     responsaveis: this.fb.array([this.createResponsavel()]) // Inicializa com um responsavel
  //   });
  // }

  // @Output() previous = new EventEmitter<void>(); // Emite evento para página anterior
  // @Output() next = new EventEmitter<void>(); // Emite evento para próxima página

  ngOnInit(): void {
    console.log(this.discountForm); // Verifique o status do formulário no console 
  }

  createResponsavel(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      work: ['', Validators.required],  // Adiciona o controle para 'work'
      desempregado: [''],               // Controle para o tempo desempregado
      empresa: [''],                    // Controle para o nome da empresa
      ocupação: [''],                   // Controle para a ocupação
      salario: ['']                     // Controle para o salário
    });
  }

  get responsaveis(): FormArray {
    return this.discountForm.get('responsaveis') as FormArray;
  }

  addResponsavel(): void {
    if (this.responsavelCount < this.maxResponsaveis) {
      this.responsaveis.push(this.createResponsavel());
      this.responsavelCount++;
    } else {
      alert('Você pode adicionar no máximo 2 responsaveis.');
    }
  }


  //Funções para os botões de navegação
  goToPrevious(): void {
    // Navegar para a página anterior ou emitir um evento se estiver usando um sistema de navegação com rotas
    console.log('Indo para a página anterior');
    this.router.navigate(['/step1']); // Substitua '/step1' pela rota correta
  }

  onNext(): void {
    if (this.discountForm.valid) {
      console.log('Formulário válido:', this.discountForm.valid);
      console.log('Estado do Formulário:', this.discountForm.value);
      this.router.navigate(['/step3']); // Substitua '/step3' pela rota correta
    } else {
      console.log('Formulário inválido');
    }
  }

}








