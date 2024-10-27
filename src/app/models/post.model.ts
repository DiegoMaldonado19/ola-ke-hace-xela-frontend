import {UserModelDTO} from './user.model';
import {PostCategoryModelDTO} from './post-category.model';

export interface CreatePostDTO{
  user_id: number;
  title: string;
  description: string;
  place: string;
  start_date_time: Date;
  end_date_time: Date;
  capacity_limit: number;
  category_id: number;
}

export interface PostModelDTO {
  id: number;
  title: string;
  place: string;
  description: string;
  user: UserModelDTO;
  start_date_time: Date;
  end_date_time: Date;
  capacity_limit: number;
  category: PostCategoryModelDTO;
  post_strike_count: number;
  approved: boolean;
}

export interface PostCollectionDTO {
  posts: PostModelDTO[];
}
