import { AdditionalUserData, User } from '../user/UserState';
import { Category } from '../Categories/CategoriesState';

type PostType<T> = T & {
  id: string | number;
};

export class Api {
  private readonly baseUrl = 'http://localhost:4000';

  public async getAdditionalUserDetails(userId: string): Promise<AdditionalUserData> {
    return await this.getData(`/user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`);
    // return await this.getData(`/api/user/${userId}`);
  }

  public async saveUserDetails(user: PostType<User>): Promise<void> {
    return await this.postData(`/user-data/sQXWbylNZZa7rvBbvDCzGvTeWhe2`, user);
    // return await this.postData(`/user-data/${user.id}`, user);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.getData(`/categories`);
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

  private async postData<TData>(url: string, data: TData) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: 'PUT',
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