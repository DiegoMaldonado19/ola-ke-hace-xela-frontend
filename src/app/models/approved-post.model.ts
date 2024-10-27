import {PostModelDTO} from './post.model';
import {UserModelDTO} from './user.model';

export interface CreateApprovedPostDTO {
  post_id: number;
  approved_by: number;
}

export interface ApprovedPostModelDTO{
  post: PostModelDTO;
  approved_by: UserModelDTO;
  approved_at: Date;
}

export interface ApprovedPostCollectionDTO{
  approved_posts: ApprovedPostModelDTO[];
}

export interface UpdateApprovedPostDTO extends Partial<CreateApprovedPostDTO>{ }
