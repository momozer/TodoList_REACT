import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoPageComponent } from './toDo/page/to-do-page/to-do-page.component';
import { DisplayComponent } from './toDo/component/display/display.component';
import { AddTaskComponent } from './toDo/component/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DisplayUsersComponent,
    ToDoListComponent,
    ToDoPageComponent,
    DisplayComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
