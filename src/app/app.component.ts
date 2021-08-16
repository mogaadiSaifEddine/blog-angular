import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  constructor(){}
  posts=[
     {  
      title: 'firs post',  
      content: 'welcome to first post ',  
      loveIts: 5,  
      created_at: new Date()
      } ,
      {  
        title: 'second post',  
        content: 'welcome to second post ',  
        loveIts: 6,  
        created_at: new Date()
        } ,
             {  
      title: 'third post',  
      content: 'welcome to third post ',  
      loveIts: 0,  
      created_at: new Date()
      } ,
  
    ]
}
