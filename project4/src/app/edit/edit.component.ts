import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';
import { Post, PostShow } from '../blog.service';
import {BlogService} from '../blog.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  posts: Post[];
  post: Post;
  username = 'cs144';
  disabled=true;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private location: Location,
              private router: Router) {
    this.route.paramMap.subscribe(() => {
        this.getPost();
      }
    );
  }
  ngOnInit() {
    // this.getPost();

  }
  getPost(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    console.log("getpost"+id);
    // this.router.navigate(['/edit/' +id]);
     this.blogService.subscribePost(posts => this.post = posts.filter(post=>post.postid==id)[0]);
      this.post = this.blogService.getPost(this.username, id);


  }
  @HostListener('window:beforeunload') @HostListener('window:popstate')
  save(): void {
    // console.log('component update');
    this.blogService.updatePost(this.username, this.post);
    this.post.modified = new Date();
    }
   delete(): void {
   this.blogService.deletePost(this.username, this.post.postid);
    this.router.navigate(['/']);

   }
   preview():void{
     this.save();
     this.router.navigate(['/preview/' + this.post.postid]);
   }
  }

