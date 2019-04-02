import {Component, Input, OnInit} from '@angular/core';
import { Post , PostShow } from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  posts: Post[];
  // username: string;
  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {
    route.paramMap.subscribe(
      () =>{
        this.posts = this.blogService.getPosts(this.blogService.parseJWT());
      })
  }
  username: string;
  parseJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   // console.log(JSON.parse(atob(base64)));
    return JSON.parse(atob(base64));
  }
  ngOnInit() {
    const user = this.parseJWT(document.cookie);
    this.username = user.usr;
    // this.posts = this.blogService.fetchPosts(this.username);
    console.log("list fectch");
    this.blogService.subscribe(result => this.posts = result);
    this.blogService.getPosts(this.username);
     // console.log(this.posts);
   // this.getPosts();
  }

  add(): void {
     const newid = this.blogService.newPost(this.username).postid;
     this.router.navigate(['/edit/' + newid]);
  }
}
