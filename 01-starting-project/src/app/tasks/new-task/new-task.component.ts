import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './NewTask';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() closed = new EventEmitter();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  //생성자를 주입시켜줌(생성자 없이도 사용 가능)
  private tasksService = inject(TasksService);
  

  onClosed(){
    this.closed.emit();
  }

  onSubmit(){
    this.tasksService.AddTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId);
    this.closed.emit();
  }

}
