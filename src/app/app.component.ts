import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { Item, Ifeed } from './news.model';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'rss-news-feed';
   newsItems: Item[] = [];
   feedUrls: Ifeed[] = [];
   url = 'https://marathi.abplive.com/home/feed';

   constructor(private newsService: NewsService) {
      this.feedUrls = this.newsService.feedUrls;

      this.newsService.getNews(this.url).subscribe(response => {
         this.newsItems = response.items;
      });
   }

   loadNews(feed) {
      this.newsService.getNews(feed.url).subscribe(response => {
         this.newsItems = response.items;
      });
   }
}
