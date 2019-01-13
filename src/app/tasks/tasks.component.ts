import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';

// const TASKS: any[] = [];
const TASKS: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
  { id: 8, title: 'Fazer tarefa 8' },
];

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
  // stylesUrl:
})

export class TasksComponent implements OnInit{
  public tasks: any[];
  public selectedTask: Task;

  constructor(){  }

  ngOnInit(){
    this.tasks = TASKS;
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }
}