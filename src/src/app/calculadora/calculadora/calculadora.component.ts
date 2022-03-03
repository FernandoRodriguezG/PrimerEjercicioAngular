import { Component } from '@angular/core';
@Component({
    selector: 'app-calculadora',
    templateUrl: 'calculadora.component.html',
})
export class CalculadoraComponent {

    numero: number = 8 ;
    multiplicar( ) {
        this.numero = this.numero*2;
    }
    divide( ) {
        this.numero = this.numero/2;
    }
    suma( ) {
        this.numero = this.numero+2;
    }
    resta( ) {
        this.numero = this.numero-2;
    }

}