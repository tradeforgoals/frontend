import { UserState } from '../user/UserState';
import { CategoriesState } from '../Categories/CategoriesState';

export interface RootState {
  user: UserState;
  categories: CategoriesState;
}