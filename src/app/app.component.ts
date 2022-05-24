import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projetos: any[] = [
    { nome: 'Calculadora', path: '/calculadora' },
    { nome: 'Gerenciador de Tarefas', path: '/gerenciador-tarefas' },
    { nome: 'Jogo da Velha', path: '/jogo-da-velha' },
    { nome: 'Conversor de Moedas', path: '/conversor-moedas' },
    { nome: 'Dashboard', path: '/dashboard' }
  ];
}
