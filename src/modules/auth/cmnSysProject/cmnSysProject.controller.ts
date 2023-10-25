import { Body, Controller, Post } from '@nestjs/common';
import { CmnSysProjectService } from './cmnSysProject.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Keep } from 'src/common/decorators/keep.decorator';


@ApiTags('应用管理')
@Controller('cmnSysProject')
export class CmnSysProjectController {
  constructor(
    private cmnSysProjectService: CmnSysProjectService,
  ) {
  }

  @Post('page')
  @Keep()
  @ApiOperation({ summary: '应用管理列表' })
  cmnSysProjectPage(@Body() dto: any) {
    return this.cmnSysProjectService.cmnSysProjectPage(dto);
  }


}
