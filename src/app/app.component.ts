import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  constructor(private translate: TranslateService) {
    
    this.translate.addLangs(['en','ar']);
//     debugger;
//  localStorage.setItem("direction",null)
// localStorage.setItem("lang",'ar')
  }
}
