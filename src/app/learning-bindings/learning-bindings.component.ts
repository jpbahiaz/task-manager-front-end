import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'learning-bindings',
    templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent{
    public mouseClickCount: number;
    public mouseOverCount: number;
    public userName: string;
    public userEmail: string;

    constructor(){
        this.mouseClickCount = 0;
        this.mouseOverCount = 0;
        this.userName = 'Nome Inicial';
        this.userEmail = 'Email Inicial';
    }



    // mouse events
    public onClick(){
        console.log("Evento onClick foi acionado")
        this.mouseClickCount++;
    }

    public onMouseOver(){
        console.log("Evento onMouseOver foi acionado")
        this.mouseOverCount++;
    }

    // key events
    public onKeyDown(event: any){
        console.log("Evento de onKeyDown foi acionado")
        console.log(event)
        this.userName = event.target.value
    }

    public onKeyUp(event: any){
        console.log("Evento de onKeyUp foi acionado")
        console.log(event)
        this.userEmail = event.target.value
    }
}