import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";
import { PageOptionsDto } from "src/common/dto/page.dto";

export class reportFormDto extends PageOptionsDto{
  @ApiPropertyOptional({ description: '展示端' })
  @IsString()
  @IsOptional()
  device: string;

  @ApiPropertyOptional({ description: '业务线' })
  @IsString()
  @IsOptional()
  bizType: string;

  @ApiPropertyOptional({ description: '报表类型' })
  @IsString()
  @IsOptional()
  type: string;
}

export class editReportFormDto{
  @ApiPropertyOptional({ description: '' })
  @IsString()
  @IsOptional()
  id: string;

  @ApiPropertyOptional({ description: '报表类型' })
  @IsString()
  @IsOptional()
  type: string;

  @ApiPropertyOptional({ description: '报表名称' })
  @IsString()
  @IsOptional()
  formName: string;

  @ApiPropertyOptional({ description: '接口路径' })
  @IsString()
  @IsOptional()
  url: string;

  @ApiPropertyOptional({ description: '展示端' })
  @IsString()
  @IsOptional()
  device: string;

  @ApiPropertyOptional({ description: '业务线' })
  @IsString()
  @IsOptional()
  bizType: string;

  @ApiPropertyOptional({ description: '状态' })
  @IsInt()
  @IsOptional()
  status: number;

  @ApiPropertyOptional({ description: '应用服务名称' })
  @IsString()
  @IsOptional()
  server: string;
}