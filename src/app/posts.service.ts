import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-12de5.firebaseio.com/posts.json',
        postData
      ).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPost() {
    let searchParam = new HttpParams();
    searchParam = searchParam.append('print', 'pretty');
    // searchParam = searchParam.append('id', '2');
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-12de5.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParam
      }
    ).pipe(map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http.delete<Post>('https://ng-complete-guide-12de5.firebaseio.com/posts.json');
  }
}
