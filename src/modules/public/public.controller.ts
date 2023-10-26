import { Controller, Get, Inject, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('Public接口')
@Controller('public')
export class PublicController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
    private configService: ConfigService
  ) {
    this.logger.log('PublicController init')
  }
  
  // 健康检查接口
  @Get('healthCheck')
  @Public()
  @ApiOperation({ summary: 'K8S健康检查接口' })
  healthCheck() {
    return this.configService.get('system') + ' ok';
  }
}
