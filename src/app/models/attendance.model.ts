import {UserModelDTO} from './user.model';
import {PostModelDTO} from './post.model';

export interface CreateAttendanceDTO{
  user_id: number;
  post_id: number;
}

export interface AttendanceModelDTO {
  user: UserModelDTO;
  post: PostModelDTO;
  created_at: Date;
}

export interface AttendanceCollectionDTO{
  attendances: AttendanceModelDTO[];
}
