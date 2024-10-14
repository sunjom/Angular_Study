import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTask } from "./new-task/NewTask";

//Angular 서비스가 앱 전체에서 사용 가능하도록 등록되며, 루트 모듈에서 자동으로 서비스 인스턴스를 생성하고 관리한다는 의미
@Injectable({providedIn:'root'})
export class TasksService{
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    selectedUserTask(userId:string){
        return this.tasks.filter((task) => task.userId == userId)!;
    }

    onCompleteTask(id:string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    AddTask(taskData:NewTask, userId:string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.date,
        })
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }

}