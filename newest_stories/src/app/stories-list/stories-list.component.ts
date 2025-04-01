import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';
import { CommonModule } from '@angular/common';
import { PageResponse } from '../models/page-response.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stories-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit{
  stories:Story [] = [];
  isLoading = false;
  pageNumber = 1;
  pageSize = 10;
  totalPages = 0;
  searchTerm=0;
  pageResponse:PageResponse=new PageResponse();
  constructor(private storyService:StoryService){}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.isLoading = true;
    this.storyService.getStories(this.pageNumber,this.pageSize, this.searchTerm).subscribe((res:any)=>{
      this.pageResponse = JSON.parse(res);
      this.stories=this.pageResponse.stories;
      this.totalPages = this.pageResponse.totalPages
      this.isLoading = false;
    },( err:any )=>{
      console.log(err);
      this.isLoading = false;
    });
  }
  onPageChange(page:number){
    this.pageNumber = page;
    this.loadData();    
  }
  onSearch() {
    this.pageNumber = 1;
    this.loadData();
  }
}
