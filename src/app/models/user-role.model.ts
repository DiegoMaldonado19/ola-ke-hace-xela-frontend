export interface CreateRoleDTO{
  name: string;
}

export interface UserRoleModelDTO {
  id: number;
  role_name: string;
}

export interface UserRoleCollectionDTO {
  role: UserRoleModelDTO[];
}
