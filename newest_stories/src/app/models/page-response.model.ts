import { Story  } from "./story.model";

export class PageResponse {
    page: number=1;
    pageSize: number=10;
    totalPages: number=0;
    stories: Story []=[];    
}