import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews, Ifeed } from './news.model';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class NewsService {
   private rssToJsonServiceBaseUrl:string = 'https://rss2json.com/api.json?rss_url=';

   feedUrls: Ifeed[] = [
      {
         location: 'Home',
         url: environment.links.home
      },
      {
         location: 'Pune',
         url: environment.links.pune
      },
      {
         location: 'Mumbai',
         url: environment.links.mumbai
      },
      {
         location: 'Maharashtra',
         url: environment.links.maharashtra
      },
      {
         location: 'India',
         url: environment.links.indiaNews
      },
      {
         location: 'World',
         url: environment.links.worldNews
      },
      {
         location: 'Technology',
         url: environment.links.technology
      },
      {
         location: 'Sports',
         url: environment.links.sports
      },
      {
         location: 'Movies',
         url: environment.links.movies
      },
      {
         location: 'Lifestyle',
         url: environment.links.lifestyle
      },
      {
         location: 'Agriculture',
         url: environment.links.agriculture
      },
      {
         location: 'Majha Katta',
         url: environment.links.majhaKatta
      },
      {
         location: 'Covid-19',
         url: environment.links.covid19
      },
      {
         location: 'Coronavirus',
         url: environment.links.coronavirus
      }
   ];

   constructor(private httpClient: HttpClient) { }

   getNews(url): Observable<INews> {
      return this.httpClient.get<INews>(this.rssToJsonServiceBaseUrl + url);
   }
}
