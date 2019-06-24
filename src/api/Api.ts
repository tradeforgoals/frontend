import { AdditionalUserData, User, BackEndUser } from '../user/UserState';
import { Category } from '../Categories/CategoriesState';
import { Item } from '../items/Items';
import { getBase64 } from '../Form/FileInput/FileInputHelper';
import { ItemOwnership } from '../types/ItemOwnership';
import { TradeStatus } from '../types/TradeStatus';

type PostType<T> = T & {
  id: string | number;
};

export class Api {
  private readonly baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : '/api';
  private readonly remoteBaseUrl = 'https://tradeforgoals-backend.azurewebsites.net/tradeforgoals/api';

  public async getAdditionalUserDetails(userId: string): Promise<AdditionalUserData> {
    console.log(userId);
    // return await this.getData(`/user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`);
    return await this.getData(`${this.remoteBaseUrl}/customers/${userId}`);
  }

  public async saveUserDetails(user: PostType<User>): Promise<void> {
    // return await this.putData(`/user-data//user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`, user);
    const buser = this.mapUserToBackEndUser(user);
    return await this.postData(`${this.remoteBaseUrl}/customers/`, buser);
  }

  public async putUserDetails(user: PostType<User>): Promise<void> {
   // return await this.putData(`${this.remoteBaseUrl}/customers/`, user);
  }


  private mapUserToBackEndUser(user: User): BackEndUser {
    return {
      id : user.uid,
      firstname: user.displayName || '',
      lastname: user.lastName,
      email: user.email || '',
      zipcode: user.zipcode,
      housenumber: user.houseNumber
    }
  }

  public async saveItem(item: Item): Promise<void> {
    // @ts-ignore Only for JsonServer
    const base64Image = await getBase64(item.imgSrc);

    item.imgSrc = base64Image;

    return await this.postData(`${this.baseUrl}/items`, item);
    // return await this.postData(`/items`, item);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.getData(`${this.baseUrl}/categories`);
  }

  public async getItems(): Promise<Item[]> {
    return await this.getData(`${this.baseUrl}/items`);
  }

  public async getProducts(): Promise<Item[]> {
    return await this.getData(`${this.remoteBaseUrl}/products`);
  }

  public async getItemById(id: number): Promise<Item> {
    return await this.getData(`${this.baseUrl}/items/${id}`);
  }

  public async getTradeById(id: number): Promise<ItemOwnership[]> {
    return await this.getData(`${this.baseUrl}/item-ownership/${id}`)
  }

  public async getTradeByTradeId(id: number): Promise<ItemOwnership[]> {
    return await this.getData(`${this.baseUrl}/item-ownership?tradeAgainst_like=${id}`)
  }

  public async getMyOwnedItems(ownerId: string): Promise<Item[]> {
    return new Promise(async resolve => {
      const ownedItems: ItemOwnership[] = await this.getData(`${this.baseUrl}/item-ownership?ownerId_like=${ownerId}`);

      if (!ownedItems) {
        resolve([]);
        return;
      }

      const allItems = await this.getItems();
      const filteredItems = allItems.filter(x => ownedItems.find(y => y.id === x.id));

      resolve(filteredItems);
    });
  }

  public async requestTrade(firstItemId: number, secondItemId: number, tradeStatus: TradeStatus): Promise<void> {
    const patch: Partial<ItemOwnership> = { 
      tradeAgainst: secondItemId,
      tradeStatus
    };

    return await this.patchData(`${this.baseUrl}/item-ownership/${firstItemId}`, patch);
  }

  public async acceptTrade(myItem: Item, theirItem: Item, 
      myOwnershipItem: ItemOwnership, theirOwnershipItem: ItemOwnership): Promise<void> {
    const myPatch: Partial<ItemOwnership> = {
      ownerId: theirOwnershipItem.ownerId,
      tradeStatus: TradeStatus.NOT_TRADING,
      tradeAgainst: 0
    };
    const theirPatch: Partial<ItemOwnership> = {
      ownerId: myOwnershipItem.ownerId,
      tradeStatus: TradeStatus.NOT_TRADING,
      tradeAgainst: 0
    };

    await this.patchData(`${this.baseUrl}/item-ownership/${myItem.id}`, myPatch);
    return await this.patchData(`${this.baseUrl}/item-ownership/${theirItem.id}`, theirPatch);
  }

  public async denyTrade(myItem: Item, theirItem?: Item, 
      myOwnershipItem?: ItemOwnership, theirOwnershipItem?: ItemOwnership): Promise<void> {
      const patch: Partial<ItemOwnership> = { 
        tradeAgainst: 0,
        tradeStatus: TradeStatus.NOT_TRADING
      };
  
      return await this.patchData(`${this.baseUrl}/item-ownership/${myItem.id}`, patch);
  }

  public async saveUser(user: PostType<User>): Promise<void> {
    return await this.postData(`${this.baseUrl}/lid/`, user);
    // return await this.postData(`/user-data/${user.id}`, user);
  }

  public async getUsers(): Promise<User[]> {
    return await this.getData(`${this.baseUrl}/lid/`);
    // return await this.postData(`/user-data/${user.id}`, user);
  }

  private async getData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }
    } catch (e) {
      throw console.log(`API call '${url}' fails with code: ${e.statusCode}. Exception: ${e.toString()}`);
    }
  }

  // private async putData<TData>(url: string, data: TData) {
  //   this.postData(url, data, 'PUT');
  // }

  private async patchData<TData>(url: string, data: TData) {
    this.postData(url, data, 'PATCH');
  }

  private async postData<TData>(url: string, data: TData, method = 'POST') {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        return response.json();
      }
    } catch (e) {
      throw console.error(`API call '${url}' fails with code: ${e.statusCode}. Exception: ${e.toString()}`);
    }
  }
}