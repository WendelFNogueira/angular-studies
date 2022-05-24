import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciadorTarefasComponent } from './gerenciador-tarefas.component';
import { TarefasModule } from './components';



@NgModule({
  declarations: [
    GerenciadorTarefasComponent
  ],
  imports: [
    CommonModule,
    TarefasModule
  ],
  exports: [
    GerenciadorTarefasComponent
  ]
})
export class GerenciadorTarefasModule { }
