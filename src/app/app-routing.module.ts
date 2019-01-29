import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

const ROUTES = RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/:id', component: TaskDetailComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ])

  @NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
  })
  export class AppRoutingModule{

  }