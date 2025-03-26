import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoryDto  } from '../models/story.model';
import { Observable, of } from 'rxjs';
import { PageResponse } from '../models/page-response.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  readonly baseUrl: string = 'https://localhost:7173/api/story/getstories';
  //readonly baseUrl: string = 'https://hacker-news.firebaseio.com/v0/newstories';
  constructor(private http:HttpClient) { } 
  
  getStories(pageNumber:number,pageSize:number):Observable<PageResponse>{
    // let response: Observable<PageResponse> =of(
    //   { 
    //     page: 1, pageSize: 2, totalPages: 4,
    //    stories: this.setMockData() 
    //   });
    // return response;
    //let url=`${this.baseUrl}/newstories`;
    let url=`${this.baseUrl}`;
    return this.http.get<PageResponse>(url,
      {
        params:
        {
          page:pageNumber.toString(),
          pageSize:pageSize.toString()
        },
        headers: {
          'Accept': 'application/json'
        },
        responseType: 'text' as 'json' 
      });
  }
  private setMockData():StoryDto [] {
     let mockData: StoryDto [] = [
      { title: 'hifs', url: 'https://www.google.com' },
      { title: 'hi', url: 'https://www.google.com' },
      { title: 'hifs', url: 'https://www.google.com' },
      { title: 'hi', url: 'https://www.google.com' },
      { title: 'hifs', url: 'https://www.google.com' },
      { title: 'hi', url: 'https://www.google.com' },
      { title: 'hifs', url: 'https://www.google.com' },
      { title: 'hi', url: 'https://www.google.com' }
    ];
    return mockData;
  }
}
