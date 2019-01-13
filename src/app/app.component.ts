import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de tarefas'
  task: Task = new Task(21, 'enviar orçamento para o cliente X')
}

export class Task{
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id
    this.title = title
  }
}
