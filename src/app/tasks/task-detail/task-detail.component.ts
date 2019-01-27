import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styles: [".form-control-feedback { margin-right: 20px; }"]
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
    public reactiveTaskForm: FormGroup;
    public task: Task;
    public taskDoneOptions: Array<any>;


    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder
    ){ 
        this.taskDoneOptions  = [
            { value: false, text: "Pendente" },
            { value: false, text: "Feita" }
        ];

        this.reactiveTaskForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
            deadline: [null, Validators.required],
            done: [null, Validators.required],
            description: [null],
            // user: this.formBuilder.group({
            //     name: ["Galba Veloso"],
            //     email: ["galba.veloso@birl.com"]
            // })
        })
    }

    ngOnInit(){
        this.task = new Task(null, null);
        
        this.route.params    
            .switchMap((params: Params) => this.taskService.getById(+params['id']))
                .subscribe(
                    task => this.setTask(task),
                    error => alert("Ocorreu um erro no servidor tente mais tarde."),
                    () => console.log("Get Tasks by id Completed")
                );
    }

    ngAfterViewInit(){
        $('#deadline').datetimepicker({
            'sideBySide': true,
            'locale': 'pt-br'
        }).on('dp.change', () => this.reactiveTaskForm.patchValue({ deadline: $('#deadline').val() } ));
    // }).on('dp.change', () => this.reactiveTaskForm.get('deadline').setValue($('#deadline').val() ));
    }

    public goBack(){
        this.location.back();
    }

    public updateTask(){
        this.task.title = this.reactiveTaskForm.get('title').value;
        this.task.deadline = this.reactiveTaskForm.get('deadline').value;
        this.task.done = this.reactiveTaskForm.get('done').value;
        this.task.description = this.reactiveTaskForm.get('description').value;

        this.taskService.update(this.task)
            .subscribe(
                () => alert("Tarefa atualizada com sucesso!"),
                () => alert("Ocorreu um erro no servidor tente mais tarde."),
                () => console.log("Update Task Completed")
            )
    }

    public setTask(task: Task): void{
        this.task = task;

        // setValue
        // let formModel = {
        //     title: task.title || null,
        //     description: task.description || null,
        //     done: task.done || null,
        //     deadline: task.deadline || null
        // }

        // this.reactiveTaskForm.setValue(formModel);

        // patchValue
        // let formModel = {
        //     title: task.title || null,
        //     description: task.description || "Teste"
        // }

        this.reactiveTaskForm.patchValue(task);
    }

    // Form errors methods

    public showFieldError(fieldNAme: string): boolean{
        let field = this.getField(fieldNAme);

        return field.invalid && ( field.touched || field.dirty )
    }

    public fieldClassForErrorOrSuccess(fieldName: string){
        return {
            "has-error": this.showFieldError(fieldName),
            "has-success": this.getField(fieldName).valid
        }
    }

    public iconClassForErrorOrSuccess(fieldName: string){
        return {
            "glyphicon-remove": this.showFieldError(fieldName),
            "glyphicon-ok": this.getField(fieldName).valid
        }
    }

    public getField(fieldName: string){
        return this.reactiveTaskForm.get(fieldName);
    }
}