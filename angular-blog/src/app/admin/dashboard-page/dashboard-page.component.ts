import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  searchPost = '';

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  remove(id: string): void {
  }
}
