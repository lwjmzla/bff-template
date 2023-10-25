import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CmnAppReFormService {
  private baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
  ){
    this.baseUrl = this.configService.get('sysIns.baseUrl') + '/auth/cmnAppReForm'
  }

  async reportFormPage(body) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/paginQuery',
      method: 'POST',
      data: body,
    }))
    return data
  }

  async addReportForm(body) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/add',
      method: 'POST',
      data: body,
    }))
    return data
  }

  async editReportForm(body) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/edit',
      method: 'POST',
      data: body,
    }))
    return data
  }

  async getReportFormDetail(params) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/queryById',
      method: 'GET',
      params
    }))
    return data
  }

  async deleteReportForm(params) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/deleteById',
      method: 'GET',
      params
    }))
    return data
  }

  async updateReportFormStatus(params) {
    const { data } = await lastValueFrom(this.httpService.request({
      url: this.baseUrl + '/updateStatus',
      method: 'GET',
      params
    }))
    return data
  }
}
