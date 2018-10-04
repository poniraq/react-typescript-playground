export interface Todo {
  id: number | undefined;
  title: string;
  deleted?: boolean;
}
export type TodoError = string | undefined;