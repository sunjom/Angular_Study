import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, CockpitComponent, ServerElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test Sercer', content:'Real Test Server'}];
  
  // emit을 통해 얻은 데이터를 객체를 받아 저장함.
  onServerAdded(Data:{ServerName:string, ServerContent:string}){
    this.serverElements.push({
      type:'server',
      name:Data.ServerName,
      content:Data.ServerContent
    })
  }

  onBlueAdded(Data:{ServerName:string,ServerContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:Data.ServerName,
      content:Data.ServerContent
    })
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Change!'; 
  }

  onDestoryFisrt(){
    this.serverElements.splice(0,1);
  }
}
