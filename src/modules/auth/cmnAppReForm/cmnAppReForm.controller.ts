import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CmnAppReFormService } from './cmnAppReForm.service';
import { ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Keep } from 'src/common/decorators/keep.decorator';
import { editReportFormDto, reportFormDto } from './cmnAppReForm.dto';
import { ReportFormInfo, ReportFormInfoPage } from './cmnAppReForm.class';
import { IdDto } from 'src/common/dto/common.dto';


@ApiTags('报表配置管理')
@Controller('cmnAppReForm')
export class CmnAppReFormController {
  constructor(
    private cmnAppReFormService: CmnAppReFormService,
  ) {
  }

  @Post('paginQuery')
  @Keep()
  @ApiOperation({ summary: '列表' })
  @ApiOkResponse({ type: ReportFormInfoPage })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  reportFormPage(@Body() dto: reportFormDto) {
    return this.cmnAppReFormService.reportFormPage(dto);
  }

  @Post('add')
  @Keep()
  @ApiOperation({ summary: '新增' })
  @ApiOkResponse({ type: ReportFormInfo })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  addReportForm(@Body() dto: editReportFormDto) {
    return this.cmnAppReFormService.addReportForm(dto);
  }

  @Post('edit')
  @Keep()
  @ApiOperation({ summary: '编辑' })
  @ApiOkResponse({ type: ReportFormInfo })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  editReportForm(@Body() dto: editReportFormDto) {
    return this.cmnAppReFormService.editReportForm(dto);
  }

  @Get('queryById')
  @Keep()
  @ApiOperation({ summary: '详情' })
  @ApiOkResponse({ type: ReportFormInfo })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  getReportFormDetail(@Query() dto: IdDto) {
    return this.cmnAppReFormService.getReportFormDetail(dto);
  }

  @Get('deleteById')
  @Keep()
  @ApiOperation({ summary: '删除' })
  //@ApiOkResponse({ type: '' })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  deleteReportForm(@Query() dto: IdDto) {
    return this.cmnAppReFormService.deleteReportForm(dto);
  }

  @Get('updateStatus')
  @Keep()
  @ApiOperation({ summary: '修改状态' })
  //@ApiOkResponse({ type: '' })
  @ApiHeader({ name: 'Authorization' })
  @ApiHeader({ name: 'userToken' })
  updateReportFormStatus(@Query() dto: IdDto) {
    return this.cmnAppReFormService.updateReportFormStatus(dto);
  }
}
