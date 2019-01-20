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
  public newTask: Task;

  constructor(private taskService: TaskService){ 
    this.newTask = new Task(null, '');
  }

  ngOnInit(){
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert("Ocorreu um erro no servidor tente mais tarde."),
        () => console.log("Get Tasks Completed")
      )
  }

  public createTask(){
    this.newTask.title = this.newTask.title.trim();

    if(!this.newTask.title){
      alert("A tarefa deve ter um título")
    }else{
      this.taskService.createTask(this.newTask)
        .subscribe(
          task => {
            this.tasks.push(task);
            this.newTask = new Task(null, '');
          },
          error => alert("Ocorreu um erro no servidor tente mais tarde."),
          () => console.log("Create Task Completed")
        )
    }
  }

  public deleteTask(task: Task){
    if( confirm(`Deseja realmente excluir a tarefa "${task.title}"?`) ){
      this.taskService.deleteTask(task.id)
        .subscribe(
          () => this.tasks = this.tasks.filter(t => t !== task),
          () => alert("Ocorreu um erro no servidor, tente mais tarde"),
          () => console.log("Delete Task completed")
        )
    }
  }
}