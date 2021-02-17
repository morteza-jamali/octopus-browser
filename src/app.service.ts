import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getContent() {
    const result = await this.httpService
      .get('www.telegram.org')
      .toPromise();
    return result.data;
  }
}
