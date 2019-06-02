import { AdditionalUserData, User, BackEndUser } from '../user/UserState';
import { Category } from '../Categories/CategoriesState';
import { Item } from '../items/Items';
import { getBase64 } from '../Form/FileInput/FileInputHelper';

type PostType<T> = T & {
  id: string | number;
};

export class Api {
  private readonly baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : '/api';

  public async getAdditionalUserDetails(userId: string): Promise<AdditionalUserData> {
    console.log(userId);
    return await this.getData(`/user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`);
  //   return await this.getData(`/customers/${userId}`);
  }

  public async saveUserDetails(user: PostType<User>): Promise<void> {
   return await this.putData(`/user-data//user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`, user);
  //  const buser = this.mapUserToBackEndUser(user);
  //  console.log(buser)
  //    return await this.postData(`/customers/${user.id}`, buser);
  }

   
  private mapUserToBackEndUser(user: User): BackEndUser {
    return {
      firstname: user.displayName ||  '',
      lastname:  user.lastName,
      email: user.email ||  '',
      zipcode: user.zipcode,
      housenumber: user.houseNumber
    }
  }

  public async saveItem(item: Item): Promise<void> {
    // @ts-ignore Only for JsonServer
    const base64Image = await getBase64(item.imgSrc); 

    item.imgSrc = base64Image;

    return await this.postData(`/items`, item);
    // return await this.postData(`/items`, item);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.getData(`/categories`);
  }

  public async getItems(): Promise<Item[]> {
    return await this.getData(`/items`);
  }

  public async getMyItems(): Promise<Item[]> {
    return await this.getData(`/myItems`);
  }

  public async getItemById(id: number): Promise<Item> {
    return await this.getData(`/items/${id}`);
  }

  public async saveUser(user: PostType<User>): Promise<void> {
    return await this.postData(`/lid/`, user);
    // return await this.postData(`/user-data/${user.id}`, user);
  }

  public async getUsers(): Promise<User[]> {
    return await this.getData(`/lid/`);
    // return await this.postData(`/user-data/${user.id}`, user);
  }

  private async getData(url: string) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`);
      if (response.ok) {
        return response.json();
      }
    } catch (e) {
      throw console.log(`API call '${url}' fails with code: ${e.statusCode}. Exception: ${e.toString()}`);
    }
  }

  private async putData<TData>(url: string, data: TData) {
    this.postData(url, data, 'PUT');
  }

  private async postData<TData>(url: string, data: TData, method = 'POST') {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
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