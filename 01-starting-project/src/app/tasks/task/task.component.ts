import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
interface TASK{
  id:string,
  userId:string,
  title:string,
  summary:string,
  dueDate:string
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:TASK;
  @Output() complete = new EventEmitter<string>();
  taskSerivce = inject(TasksService);


  onCompleteTask(){
    this.taskSerivce.onCompleteTask(this.task.id);
  }
}
