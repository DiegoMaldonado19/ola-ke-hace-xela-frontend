import { UserRoleModelDTO } from './user-role.model';

export interface CreateUserDTO{
   username: string;
   email: string;
   password: string;
   role_id: number;
   cui: string;
   name: string;
   lastname: string;
   phone: string;
}

export interface UserModelDTO {
  id: number;
  username: string;
  role: UserRoleModelDTO;
  email: string;
  cui: string;
  name: string;
  lastname: string;
  phone: string;
  automatically_post: boolean;
}

export interface UserCollectionDTO {
  users: UserModelDTO[];
}
