import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { Item } from './news.model';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'rss-news-feed';
   newsItems: Item[] = [];

   constructor(private newsService: NewsService) {
      this.newsService.getNews().subscribe(response => {
         this.newsItems = response.items;
      });
   }
}
