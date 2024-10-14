import { Component } from '@angular/core';
import { HeaderComponent } from "./header/heder.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId?:string;

  get SelectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
