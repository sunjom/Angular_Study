import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  //이벤트 속성을 통해 값을 전달해주는 역할.
  @Output() ServerCreate = new EventEmitter<{ServerName:string, ServerContent:string}>();
  @Output('bpCreate') BlueprintCreate = new EventEmitter<{ServerName:string, ServerContent:string}>();
  //ngModel을 통해 얻은 양방향 데이터를 저장하는 변수.
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent',{static:true}) serverContent?:ElementRef;

  onAddServer(nameInput:HTMLInputElement) {
    
    this.ServerCreate.emit({
      ServerName:nameInput.value,
      ServerContent:this.serverContent?.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    
    this.BlueprintCreate.emit({
      ServerName:nameInput.value,
      ServerContent:this.serverContent?.nativeElement.value
    })
  }
}
