export interface Post {
  id: number | undefined;
  title: string;
  body: string;
}

export type PostError = string | undefined;