import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { loadNacosConfig } from './nacos.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [async () => loadNacosConfig()],
    }),
  ],
})
export class VmpConfigModule {}
