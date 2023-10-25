import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CmnSysProjectService {
  private baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
  ){
    this.baseUrl = this.configService.get('sysIns.baseUrl') + '/auth/cmnSysProject'
  }

  async cmnSysProjectPage(body) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/page',
      method: 'POST',
      data: body,
    }))
    return data
  }
}
