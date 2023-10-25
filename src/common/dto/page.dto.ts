import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class PageOptionsDto {
  @ApiProperty({
    description: '页码',
    //required: false,
    //default: 1,
  })
  @IsInt({ message: '请传入正确的页码' })
  @Min(1, { message: '请传入正确的页码' })
  current: number

  @ApiProperty({
    description: '当前页size',
  })
  @IsInt({ message: '请传入正确的size' })
  @Min(1, { message: '请传入正确的size' })
  size: number
}
