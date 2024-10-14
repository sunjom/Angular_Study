import { Component ,computed,Input,signal,input, Output, EventEmitter, output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// import {DUMMY_USERS} from '../dummy-user';

// const randomIdx = Math.round(Math.random()*DUMMY_USERS.length)


// type User={
//   id:string,
//   name:string,
//   avatar:string
// }
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //! => 값이 무조건 들어온다는 뜻.
  //required:true를 주면, 컴포넌트에 해당 값이 없을경우 에러를 냄(원래는 에러 안남)
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input({required:true}) id!:string;

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  //EventEmitter가 자동으로 생성됨.
  //제네릭을 이용해 입력의 타입을 정해줌.
  //select = output<string>();

  //값이 들어온다는 input()을 사용, ()안에 기본값을 넣어줄 수 있음.
  //제네릭 사용할 수 있음.
  // required => 위에 required:true와 같음.
  // avatar = input.required<string>();
  // name = input.required<string>();


  // imgPath = computed(()=>{
  //   return 'assets/users/' +this.avatar();
  // })
  get imgPath(){
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }

  // UserImg = signal(DUMMY_USERS[randomIdx]);
  // imgPath = computed(() => 'assets/users/'+this.UserImg().avatar)

  // get imgPath(){
  //   return 'assets/users/'+this.UserImg.avatar;
  // }

  // onSelectUser(){
  //   const randomIdx = Math.round(Math.random()*DUMMY_USERS.length);
  //   this.UserImg.set(DUMMY_USERS[randomIdx]);
  // }
}
