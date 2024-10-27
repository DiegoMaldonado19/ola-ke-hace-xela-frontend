import {UserModelDTO} from './user.model';

export interface CreateNotificationDTO{
  user_id: number;
  message: string;
  already_read: boolean;
}

export interface NotificationModelDTO {
  id: number;
  user: UserModelDTO;
  message: string;
  created_at: Date;
  already_read: boolean;
}

export interface NotificationCollectionDTO{
  notifications: NotificationModelDTO[];
}

export interface UpdateNotificationDTO extends Partial<CreateNotificationDTO>{}
