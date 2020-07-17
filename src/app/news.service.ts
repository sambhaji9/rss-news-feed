import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from './news.model';

@Injectable({
   providedIn: 'root'
})
export class NewsService {
   private rssToJsonServiceBaseUrl:string = 'https://rss2json.com/api.json?rss_url=';

   constructor(private httpClient: HttpClient) { }

   getNews(): Observable<INews> {
      return this.httpClient.get<INews>(this.rssToJsonServiceBaseUrl + 'https://marathi.abplive.com/news/pune/feed');
   }
}
