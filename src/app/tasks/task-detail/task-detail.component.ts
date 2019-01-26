import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
    public task: Task;
    public taskDoneOptions: Array<any> = [
        { value: false, text: "Pendente" },
        { value: false, text: "Feita" }
    ]

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ){ }

    ngOnInit(){
        this.task = new Task(null, null);
        
        this.route.params    
            .switchMap((params: Params) => this.taskService.getById(+params['id']))
                .subscribe(
                    task => this.task = task,
                    error => alert("Ocorreu um erro no servidor tente mais tarde."),
                    () => console.log("Get Tasks by id Completed")
                );
    }

    ngAfterViewInit(){
        $('#deadline').datetimepicker({
            'sideBySide': true,
            'locale': 'pt-br'
        }).on('dp.change', () => this.task.deadline = $('#deadline').val());
    }

    public goBack(){
        this.location.back();
    }

    public updateTask(){
        this.taskService.update(this.task)
            .subscribe(
                () => alert("Tarefa atualizada com sucesso!"),
                () => alert("Ocorreu um erro no servidor tente mais tarde."),
                () => console.log("Update Task Completed")
            )
    }

    public showFieldError(field): boolean{
        return field.invalid && ( field.touched || field.dirty )
    }
}