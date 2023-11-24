export type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
};
export type RawBlog = {
  id: number;
  header: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
};

export type Blog = {
  blog: RawBlog;
  user: User;
  comments: Comment[];
  rating: Rating;
};
export type Comment = {
  id: number;
  blogId: number;
  authorId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Rating = {
  id: number;
  blogId: number;
  authorId: number;
  value: number;
  createdAt: Date;
  updatedAt: Date;
};
