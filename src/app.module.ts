import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { LogsModule } from './logs/logs.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE, RouterModule } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { HttpServiceInterceptor } from './common/interceptors/http-service.interceptors';
import { HttpService } from '@nestjs/axios';
import { VmpConfigModule } from './config/config.module';
import { configManager } from './config/nacos.configuration';
//import { authMiddleware } from './common/middleware/auth.middleware';
import { AuthGuard } from './common/guards/auth.guard';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicModule } from './modules/public/public.module';

@Module({
  imports: [
    RouterModule.register([
      { path: 'auth', module: AuthModule },
    ]),
    VmpConfigModule,
    LogsModule,
    AuthModule,
    SharedModule,
    PublicModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpServiceInterceptor,
    },
    {
			provide: APP_PIPE,
			useValue: new ValidationPipe({}),
		},
    {
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
  ],
})
export class AppModule implements NestModule{
  constructor(httpService: HttpService) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    httpService.axiosRef.interceptors.request.use(configManager.axiosRequestInterceptor(new RegExp('^cmn-base-')));
  }

  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(authMiddleware).forRoutes('*')
  }
}
