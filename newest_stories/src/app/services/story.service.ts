import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../models/page-response.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  readonly baseUrl: string = 'https://localhost:7173/api/story/getstories';
  constructor(private http:HttpClient) { } 
  
  getStories(pageNumber:number,pageSize:number, searchTerm:number):Observable<PageResponse> | any{
    let url=`${this.baseUrl}`;
    return this.http.get<PageResponse>(url,
      {
        params:
        {
          page:pageNumber.toString(),
          pageSize:pageSize.toString(),
          searchTerm:searchTerm.toString()
        },
        headers: {
          'Accept': 'application/json'
        },
        responseType: 'text' as 'json' 
      });
  }
}
