import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // encapsulation:ViewEncapsulation.Emulated속성 때문에 CSS가 컴포넌트 별로 지정해줘야 한다.
  //None속성을 주면 해당 컴포넌트 CSS있는 값이 다른 컴포넌트에도 적용이 된다.
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy

{
  @Input() element:{type:string,name:string,content:string} = 
    { type: '', name: '', content: '' };
  @Input() name:string ='';
  @ViewChild('heading') header?:ElementRef;
  @ContentChild('contentPage') paragraph?:ElementRef;
  constructor(){
    console.log("constructor called!");
  }
  //값이 변하면 실행
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called!");
    console.log(changes);
  }
  // 컴포넌트가 생성이 완료되면 실행.
  ngOnInit(){
    console.log("ngOnInit called!");
    console.log('Text Content :' +this.header?.nativeElement.textContent); 
    console.log('Text Content of paragraph' + this.paragraph?.nativeElement.textContent);
  }
  //이벤트가 발생되면 실행
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  //ngDoCheck()가 한번 실행된 후 한번만 실행.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //ngDoCheck()가 실행된 후 실행.
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  
  //ngAfterContentChecked()가 실행된 후 한번만 실행
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log('Text Content :' +this.header?.nativeElement.textContent); 
    console.log('Text Content of paragraph' + this.paragraph?.nativeElement.textContent);
  }

  //ngAfterContentChecked()가 실행된 후 실행.
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  //요소가 삭제되면 실행.
  ngOnDestroy(): void {
    console.log("ngOnDestory");
  }
}
