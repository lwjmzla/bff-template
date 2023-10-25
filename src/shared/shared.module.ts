import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

// common provider list
const providers = [];

/**
 * 全局共享模块
 */
@Global()
@Module({
  imports: [
    HttpModule
  ],
  providers: [...providers],
  exports: [HttpModule, ...providers],
})
export class SharedModule {}
