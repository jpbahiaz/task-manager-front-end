import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'learning-bindings',
    templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent{
    // mouse events
    public onClick(){
        console.log("Evento onClick foi acionado")   
    }

    public onMouseOver(){
        console.log("Evento onMouseOver foi acionado")
    }

    // key events
    public onKeyDown(){
        console.log("Evento de onKeyDown foi acionado")
    }

    public onKeyUp(){
        console.log("Evento de onKeyUp foi acionado")
    }

}