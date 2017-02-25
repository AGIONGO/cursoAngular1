import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}

