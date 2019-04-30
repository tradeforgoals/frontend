import { UserState } from '../user/UserState';
import { ItemState } from '../items/ItemReducer';

export interface RootState {
  user: UserState;
  items: ItemState;
}
