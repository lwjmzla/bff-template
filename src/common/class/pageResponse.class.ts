import { ApiPropertyOptional } from "@nestjs/swagger";

export class PageResponseOptionsDto {
  @ApiPropertyOptional({ description: '页码' })
  current: number;

  @ApiPropertyOptional({ description: '当前页size' })
  size: number;

  @ApiPropertyOptional({ description: '总页数' })
  pages: number;

  @ApiPropertyOptional({ description: '总条数' })
  total: number;
}
