import {PostModelDTO} from './post.model';
import {UserModelDTO} from './user.model';

export interface CreateReportDTO{
  post_id: number;
  user_id: number;
  comment: string;
}

export interface ReportModelDTO {
  id: number;
  post: PostModelDTO;
  user: UserModelDTO;
  comment: string;
}

export interface ReportCollectionDTO{
  reports: ReportModelDTO[];
}

export interface UpdateReportDTO extends Partial<CreateReportDTO>{ }
