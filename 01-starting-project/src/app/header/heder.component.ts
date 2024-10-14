import { Component } from "@angular/core";
//selector은 기본적으로 두단어로 이루어짐. => 충돌방지
@Component({
    selector: 'app-header',
    standalone:true,
    templateUrl:"./heder.component.html",
    styleUrls:['./heder.component.css'],
    // styles:['h1 {color:red}'],
})
export class HeaderComponent{

}