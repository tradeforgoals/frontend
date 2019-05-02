import { AdditionalUserData } from '../user/UserState';
import { Category } from '../Categories/CategoriesState';

// Mock data
import additionalUserDataMock from './mockdata/AdditionalUserData.json';
import categoriesMock from './mockdata/Categories.json';

export class Api {
  // private readonly baseUrl = '/';

  public async getAdditionalUserDetails(userId: string): Promise<AdditionalUserData> {
    return new Promise((resolve, reject) => {
      resolve(additionalUserDataMock);
    });
    // return await this.getData(`/api/user/${userId}`);
  }

  public async getCategories(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      resolve(categoriesMock);
    });

    // return await this.getData(`/api/categories`);
  }

  // private async getData(url: string) {
  //   try {
  //     const response = await fetch(`${this.baseUrl}${url}`);
  //     if (response.ok) {
  //       return response.json();
  //     }
  //   } catch (e) {
  //     throw console.log(`API call '${url}' fails with code: ${e.statusCode}. Exception: ${e.toString()}`);
  //   }
  // }
}