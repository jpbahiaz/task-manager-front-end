import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  //providers: [{ provide: TaskService, useClass: TaskService }] //Configuração de injeção de dependência
})

export class TasksComponent implements OnInit{
  public tasks: Task[];
  public selectedTask: Task;

  constructor(private taskService: TaskService){ }

  ngOnInit(){
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert("Ocorreu um erro no servidor tente mais tarde."),
        () => console.log("Get Tasks Completed")
      )
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }
}