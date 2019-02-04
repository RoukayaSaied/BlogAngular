import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const content = form.value['content'];
    const title = form.value['title'];
    this.postsService.addPost(title, content);
    this.router.navigate(['/posts']);
  }
}
