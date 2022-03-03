import { NgModule } from "@angular/core";
import {CalculadoraComponent} from './calculadora/calculadora.component'


@NgModule({
    declarations: [
        CalculadoraComponent
    ],
    exports: [
        CalculadoraComponent
    ]
})

export class CalculadoraModule {}