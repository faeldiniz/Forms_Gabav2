import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule, Step1Component, Step2Component, Step3Component, ReactiveFormsModule], // Inclua o CommonModule para usar as diretivas do Angular
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']

})
export class WizardComponent {

  currentStep = 1; // Exemplo para controle do switch

  goToNextStep() {
    if (this.currentStep < 3) {
      this.currentStep++; // Avança para a próxima etapa
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--; // Volta para a etapa anterior
    }
  }


  finish() {
    // Finalizar o formulário e enviar os dados
    console.log('Formulário finalizado');
  }

}
