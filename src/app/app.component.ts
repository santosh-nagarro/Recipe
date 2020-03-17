import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subscription } from 'rxjs';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFething = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFething = true;
    this.postService.fetchPost().subscribe(posts => {
      this.isFething = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFething = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }


}
