import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/heder.component';

//bootstrapApplication을 통해 AppComponent가 있다는걸 알림.
bootstrapApplication(AppComponent).catch((err) => console.error(err));
//이런식으로 index.html에 태그를 직접 추가한 뒤, bootstrapApplication을 호출하면 적용할 수 있음
// bootstrapApplication(HeaderComponent)
