import { Story } from "./story.model";

export interface PageResponse {
    page: number;
    pageSize: number;
    totalPages: number;
    stories: Story[];    
}