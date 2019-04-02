import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import construct = Reflect.construct;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
export class PostShow {
  postid: number;
  created: string;
  modified: string;
  title: string;
  body: string;
}
@Injectable()
export class BlogService {
  // private obPosts: Observable<Post[]>;
  constructor(private http: HttpClient,
              private router: Router
  ) {
    this.thisusername= this.parseJWT();
    this.fetchPosts(this.thisusername);

  }
  thisusername: string;
  xmlHttp = new XMLHttpRequest();
  public posts: Post[];
  private selectedPost: Post;
  callback =null;
  callbackpost=null;
  callbackpreview=null;
  parseJWT():string{
    let token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64)).usr;
  }
  subscribe(callback){
    this.callback=callback;
  }
  subscribePost(callbackpost){
    this.callbackpost=callbackpost;
  }
  subscribe2(callbackpreview){
    this.callbackpreview=callbackpreview;
  }
  fetchPosts(username: string): void {
    this.posts=[];
    this.thisusername = username;
    this.xmlHttp.open("GET", 'http://localhost:3000/api/' + username);
     this.xmlHttp.onreadystatechange = (() => {
       if(this.xmlHttp.readyState != 4) return;
       if(this.xmlHttp.status==401){
         alert("authetication fail");
       }else {
         const results = JSON.parse(this.xmlHttp.responseText);
         // console.log("fetch");
         for (let i = 0; i < results.length; i++) {
           let postnew = new Post();

           postnew.postid = results[i].postid;
           postnew.title = results[i].title;
           postnew.body = results[i].body;
           postnew.created = new Date(results[i].created);
           postnew.modified = new Date(results[i].modified);
           this.posts.push(postnew);
         }
         if (this.callback) {
           this.callback(this.getPosts(username));
         }
         if (this.callbackpost) {
           this.callbackpost(this.getPosts(username));
         }
         if(this.callbackpreview){
           this.callbackpreview(this.getPosts(username));
         }
       }
    });
    this.xmlHttp.send();

  }
  getPosts (username: string):  Post[] {
    return this.posts;
  }
  getPost(username: string, id: number): Post {
    // console.log("service:getpost");
    // console.log(this.posts);
    username = this.thisusername;
    for(let i=0;i<this.posts.length;i++){
      if(this.posts[i].postid === id){
        return this.posts[i];
      }
    }
  }
  newPost (username: string): Post {
    let largeid=0;
    console.log(this.posts.length);
    if(this.posts.length!=0){
    largeid = this.posts[this.posts.length - 1].postid;}
    else{largeid=0;}
    const newp = {
      postid: largeid + 1,
      created: new Date(),
      modified: new Date(),
      title: '',
      body: ''
    };

    this.posts.push(newp);
    username = this.thisusername;
   this.xmlHttp.open("POST","http://localhost:3000/api/" + username + "/" + newp.postid);

    this.xmlHttp.setRequestHeader('Content-Type', 'application/json');
    this.xmlHttp.send(JSON.stringify(newp));
    this.xmlHttp.onreadystatechange = ( () => {
     if(this.xmlHttp.readyState !=4) {return;}
     if(this.xmlHttp.status != 201){
        this.posts.pop();
        console.log(this.posts.length+" length");
        alert("There was an error while inserting");
        this.router.navigate(['/']);
     }
     }

   );

   return newp;

  }

  updatePost(username: string, post: Post): void{
    // console.log("update");
    username = this.thisusername;

      for( let i=0;i<this.posts.length;i++){
        if(this.posts[i].postid === post.postid){
          this.posts[i].title = post.title;
          this.posts[i].body = post.body;
          this.posts[i].modified = new Date();
          this.xmlHttp.open("PUT", "http://localhost:3000/api/"+username+"/"+post.postid);

          this.xmlHttp.onreadystatechange = (() => {
            console.log(this.xmlHttp.readyState);
            if(this.xmlHttp.readyState != 4) return;
            if(this.xmlHttp.responseXML==null){return;}
             console.log(this.xmlHttp.status);
            if (this.xmlHttp.status != 200) {
              alert("There was an error while updating");
              // console.log("update+"post.postid);
              this.router.navigate(["/edit/" + post.postid.toString()]);
            }
          });
          this.xmlHttp.setRequestHeader("Content-type", "application/json");//
          this.xmlHttp.send(JSON.stringify(post));
          break;
        }
  }
  }
  deletePost(username: string, postid: number):  void {
    username = this.thisusername;
    for( let i=0;i<this.posts.length;i++){
      if(this.posts[i].postid === postid){
       this.posts.splice(i,1);
       console.log(this.posts);
        this.xmlHttp.open("DELETE", "http://localhost:3000/api/"+username+"/"+postid);
        this.xmlHttp.onreadystatechange = (() => {
          if(this.xmlHttp.readyState !== 4) return;
          if (this.xmlHttp.status !== 204) {
            alert("There was an error while deleting");
            this.router.navigate(['/']);
          }
        });
        this.xmlHttp.send();
        break;
      }
    }

  }

}

