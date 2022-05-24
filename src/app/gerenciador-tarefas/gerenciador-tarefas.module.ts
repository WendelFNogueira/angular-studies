import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciadorTarefasComponent } from './gerenciador-tarefas.component';



@NgModule({
  declarations: [
    GerenciadorTarefasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GerenciadorTarefasComponent
  ]
})
export class GerenciadorTarefasModule { }
