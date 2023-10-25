import { ApiPropertyOptional } from "@nestjs/swagger";
import { PageResponseOptionsDto } from "src/common/class/pageResponse.class";

export class ReportFormInfo {
  @ApiPropertyOptional({ description: '' })
  id: string;

  @ApiPropertyOptional({ description: '统计报表名称' })
  formName: string;

  @ApiPropertyOptional({ description: '报表类型' })
  type: string;

  @ApiPropertyOptional({ description: '应用服务名称' })
  server: string;

  @ApiPropertyOptional({ description: '获取数据地址' })
  url: string;

  @ApiPropertyOptional({ description: '状态（1启用，0禁用）' })
  status: number;

  @ApiPropertyOptional({ description: '盒子ID' })
  boxId: string;

  @ApiPropertyOptional({ description: '创建用户' })
  createBy: string;

  @ApiPropertyOptional({ description: '创建时间' })
  createTime: string;

  @ApiPropertyOptional({ description: '修改用户' })
  updateBy: string;

  @ApiPropertyOptional({ description: '修改时间' })
  updateTime: string;

  @ApiPropertyOptional({ description: '业务线' })
  bizType: string;

  @ApiPropertyOptional({ description: '展示端' })
  device: string;
}

export class ReportFormInfoPage extends PageResponseOptionsDto{

  @ApiPropertyOptional({
    type: [ReportFormInfo],
  })
  records: ReportFormInfo[];
}
