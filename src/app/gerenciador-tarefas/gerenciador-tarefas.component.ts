import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciador-tarefas',
  templateUrl: './gerenciador-tarefas.component.html',
  styleUrls: ['./gerenciador-tarefas.component.css']
})
export class GerenciadorTarefasComponent implements OnInit {
  title = 'Gerenciador de Tarefas';
  constructor() { }

  ngOnInit(): void {
  }

}
