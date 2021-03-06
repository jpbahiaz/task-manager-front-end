// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular plugin imports
import { Angular2TokenService } from "angular2-token";

// Components Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component'
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';

// Services Imports
import { TaskService } from './tasks/shared/task.service';
import { AuthService } from './shared/auth.service';

// Guards Imports
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

// Modules Imports
import { AppRoutingModule } from './app-routing.module'

// In memory web API
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTaskDataService } from './in-memory-task-data.service';

// RxJs operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


// RxJs extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// JQuery plugins
import * as $ from 'jquery';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    Angular2TokenService,
    AuthGuard,
    NotAuthenticatedGuard,
    AuthService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
