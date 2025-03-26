import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { StoryDto  } from '../models/story.model';
import { CommonModule } from '@angular/common';
import { PageResponse } from '../models/page-response.model';

@Component({
  selector: 'app-stories-list',
  imports: [CommonModule],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit{
  stories:StoryDto [] = [];
  isLoading = false;
  pageNumber = 1;
  pageSize = 2;
  totalPages = 0;
  pageResponse:PageResponse=new PageResponse();
  constructor(private storyService:StoryService){}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.isLoading = true;
    this.storyService.getStories(this.pageNumber,this.pageSize).subscribe((res:any)=>{
      this.pageResponse = JSON.parse(res);
      this.stories=this.pageResponse.stories;
      this.totalPages = this.pageResponse.totalPages
      this.isLoading = false;
    },err=>{
      debugger;
      console.log(err);
      this.isLoading = false;
    });
  }
  onPageChange(page:number){
    this.pageNumber = page;
    this.loadData();    
  }
}
