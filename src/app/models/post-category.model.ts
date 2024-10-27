export interface CreatePostCategoryDTO{
  name: string;
}

export interface PostCategoryModelDTO {
  id: number;
  category_name: string;
}

export interface PostCategoryCollectionDTO{
    category: PostCategoryModelDTO[];
}

export interface UpdatePostCategoryDTO extends Partial<CreatePostCategoryDTO>{}
