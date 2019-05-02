import { UserState } from '../user/UserState';
import { ItemState } from '../items/ItemReducer';
import { CategoriesState } from '../Categories/CategoriesState';

export interface RootState {
  user: UserState;
  categories: CategoriesState;
  items: ItemState;
}
