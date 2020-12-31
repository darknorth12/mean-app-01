import { Subject } from 'rxjs';
import { Post } from './post.model';

export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
      return this.postUpdated.asObservable();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
