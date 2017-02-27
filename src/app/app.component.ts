import { Component, Directive } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';

  onClick(){
    alert('Botão Clicado');
    
  }
  conteudoAtual : string = '';
  conteudoSalvo : string = '';
  isMouseOver : boolean = false;

  onKeyUp(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual= (<HTMLInputElement>event.target).value;
  }
  onSave(valor:string){
    this.conteudoSalvo=valor;
  }
  onMouseSpan(){
    this.isMouseOver=!this.isMouseOver;
  }
  nome : string = '';
  pessoa = {primeiroNome :'', idade : 18};
  nomeCurso : String = 'Curso Angular 2';
  valorInicial : number =100;

  onValorMudou(event){
    console.log('Mudou valor:'+event.novoValor);
  }

 }

