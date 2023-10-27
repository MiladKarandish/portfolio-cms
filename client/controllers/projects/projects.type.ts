export interface GetAll {
  id: number;
  attributes: {
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
  };
}
