import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';
import { Post, PostShow } from '../blog.service';
import {BlogService} from '../blog.service';
import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
reader = new Parser();
writer = new HtmlRenderer();


post: Post;
  username = '';
  titleHtml: string;
  bodyHtml: string;


  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private location: Location,
              private router: Router) {

  }
  ngOnInit() {
  this.username = this.blogService.parseJWT();
  const id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(() => {

      this.getPost();
      }
    );

  }

  
  getPost(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id"+id);
     this.blogService.subscribe2(posts => {this.post = posts.filter(post=>post.postid==id)[0];
     console.log(this.post);
     const reader = new Parser();
       var writer = new HtmlRenderer();
       var parsed = reader.parse(this.post.title);
       var parsed1 = reader.parse(this.post.body);
       this.titleHtml = writer.render(parsed);
       this.bodyHtml = writer.render(parsed1);

     });
    this.post = this.blogService.getPost(this.username, id);
    if(typeof(this.post)!='undefined'){

    console.log(this.post);
    const reader = new Parser();
   var writer = new HtmlRenderer();
    var parsed = reader.parse(this.post.title);
    var parsed1 = reader.parse(this.post.body);
    this.titleHtml = writer.render(parsed);
    this.bodyHtml = writer.render(parsed1);}

}
	


edit():void{
	const id = +this.route.snapshot.paramMap.get('id');
	this.router.navigate(['/edit/' +id]);

	}
}


