import { NgModule } from "@angular/core";
import {CalculadoraComponent} from './calculadora/calculadora.component'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CalculadoraComponent
    ],
    exports: [
        CalculadoraComponent
    ],
    imports:[
        CommonModule,
    ]
})

export class CalculadoraModule {}