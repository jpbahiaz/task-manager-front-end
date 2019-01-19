import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Task } from './task.model';

// const TASKS: any[] = [];

@Injectable()

export class TaskService{
    public tasksUrl = "api/tasks";

    constructor(private http: Http){ }

    public getTasks(): Observable<Task[]>{
        return this.http.get(this.tasksUrl)
            .map((response: Response) => response.json().data as Task[])
    }

    public getImportantTasks(): Observable<Task[]>{
        return this.getTasks()
            .map(tasks => tasks.slice(0, 3));
    }

    public getTask(id: number): Observable<Task>{
        let url = `${this.tasksUrl}/${id}`;

        return this.http.get(url)
            .map((response: Response) => response.json().data as Task)
    }
}