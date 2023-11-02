import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-mainpage',
  templateUrl: './fb-mainpage.component.html',
  styleUrls: ['./fb-mainpage.component.css']
})
export class FbMainpageComponent implements OnInit {
  newPost: { text: string, image: string } = { text: '', image: '' };
  posts: any[] = [];

  constructor() {}

  ngOnInit() {
   
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.posts = storedPosts;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newPost.image = URL.createObjectURL(file);
  }

  submitPost() {
    if (this.newPost.text || this.newPost.image) {
      this.posts.unshift({
        text: this.newPost.text,
        image: this.newPost.image,
        likeCount: 0,
        commentCount: 0,
        shareCount: 0,
      });
      this.newPost.text = '';
      this.newPost.image = '';


      localStorage.setItem('posts', JSON.stringify(this.posts));
      
    }
  }

  likePost(post: any) {
    post.likeCount++;
  }

  commentPost(post: any) {
    post.commentCount++;
  }

  sharePost(post: any) {
    post.shareCount++;
  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    if (index !== -1) {
      this.posts.splice(index, 1);
  
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
  
}