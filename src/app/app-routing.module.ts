import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculadoraComponent } from "./calculadora";
import { ConversorMoedasComponent } from "./conversor-moedas";
import { DashboardComponent } from "./dashboard";
import { GerenciadorTarefasComponent } from "./gerenciador-tarefas";
import { JogoDaVelhaComponent } from "./jogo-da-velha";

const routes: Routes = [
    { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'gerenciador-tarefas', component: GerenciadorTarefasComponent },
    { path: 'jogo-da-velha', component: JogoDaVelhaComponent },
    { path: 'conversor-moedas', component: ConversorMoedasComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
