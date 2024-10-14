import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import {dummyTasks} from '../dummy-tasks'; 
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/NewTask';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name?: string;
  @Input({required:true}) userId!:string;
  
  addTaskCheck = false;
  // private or public처럼 영역을 설정해주면 알아서 생성자를 만들어줌.
  constructor(private tasksService:TasksService){}

  get selectedUserTasks(){
    return this.tasksService.selectedUserTask(this.userId);
  }

  onAddTask(){
    this.addTaskCheck = true;
  }

  onCompleteTask(id:string){
    return this.tasksService.onCompleteTask(id);
  }
  
  onCloseTask(){
    this.addTaskCheck = false;
  }
}
