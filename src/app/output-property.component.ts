import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template: `
        <div>
            <button type="button" class="btn btn-primary" (click)="descrementa()">-</button>
            <input type="text" [value] = "valor" readonly>
            <button type="button" class="btn btn-primary" (click)="incrementa()">+</button>            
        </div>
    
    `
})
export class OutputPropertyComponent{
  @Input() valor : number = 0;
  @Output() mudouValor = new EventEmitter();

    constructor() { }

    incrementa(){
        this.valor++;
        this.mudouValor.emit({novoValor:this.valor});
    }
    descrementa(){
        this.valor--;
        this.mudouValor.emit({novoValor:this.valor});

    }
}