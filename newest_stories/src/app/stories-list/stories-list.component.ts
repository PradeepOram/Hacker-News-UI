import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stories-list',
  imports: [CommonModule],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit{
  stories:Story[] = [];
  isLoading = false;
  pageNumber = 1;
  pageSize = 2;
  totalPages = 0;
  constructor(private storyService:StoryService){}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.isLoading = true;
    this.storyService.getStories(this.pageNumber,this.pageSize).subscribe(res=>{
      this.stories=res.stories;
      this.totalPages = res.totalPages
      this.isLoading = false;
    },err=>{
      console.log(err);
      this.isLoading = false;
    });
  }
  onPageChange(page:number){
    this.pageNumber = page;
    this.loadData();    
  }
}
