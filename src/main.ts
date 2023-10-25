import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  if (process.env.NODE_ENV === 'development' || process.env.BUILD_ENV === 'development' ) {
    app.enableCors();

    const config = new DocumentBuilder()
      .setTitle('综合管理平台--swagger')
      .setDescription('综合管理平台--swagger')
      .setVersion('1.0')
      .addServer('')
      .addServer('http://8.134.77.199:10180/portal/api/auth-bff')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger-api', app, document);
  }

  const port = configService.get('port') || 7000
  await app.listen(port, '0.0.0.0');
  const serverUrl = await app.getUrl();
  Logger.log(`api服务已经启动,请访问: ${serverUrl}`);
  Logger.log(`swagger-api服务已经启动,请访问: ${serverUrl}/swagger-api`);
}
bootstrap();
