import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

const ROUTES = RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'sign-in', component: SignInComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'sign-up', component: SignUpComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ])

  @NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
  })
  export class AppRoutingModule{

  }