import { AdditionalUserData } from '../user/UserState';

export class Api {
  private readonly baseUrl = '/';

  public async getAdditionalUserDetails(userId: string): Promise<AdditionalUserData> {
    return new Promise((resolve, reject) => {
      resolve({
        firstName: 'Jorik',
        lastName: 'Barten',
        zipcode: '1111AA',
        houseNumber: '3',
        city: 'Amsterdam'
      });
    });
    // return await this.getData(`/api/user/${userId}`);
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
}