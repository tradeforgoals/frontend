export interface Category {
  name: string;
  url: string;
  order: number;
}

export interface CategoriesState {
  readonly loading: boolean;
  readonly data: Category[];
  readonly error: string | null;
}