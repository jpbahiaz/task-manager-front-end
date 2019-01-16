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
      .then((tasks) => this.tasks = tasks)
      .catch((error_msg) => console.log(error_msg))
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }
}