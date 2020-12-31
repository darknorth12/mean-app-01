import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enteredPost : FormGroup;

  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.enteredPost = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onSubmitPost() {
    this.postService.addPost(this.enteredPost.value);
    this.enteredPost.reset();
  }
}
