import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  
   POSTS: Post[] = [
  { title: 'Mon premier post', content: 'bla bla bla', loveIts: 0, created_at: new Date },
  { title: 'Mon deuxième post', content: 'bla bla bla', loveIts: 0, created_at: new Date },
  { title: 'Encore un post', content: 'bla bla bla', loveIts: 0, created_at: new Date }
]

}
