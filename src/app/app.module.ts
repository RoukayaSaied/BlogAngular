import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
const appRoutes : Routes =[
  {path: '', component:PostListComponent},
  {path: 'posts', component:PostListComponent},
  {path: 'newPost', component:NewPostComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
