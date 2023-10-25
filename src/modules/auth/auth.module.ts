import { Module } from '@nestjs/common';
import { CmnSysProjectController } from './cmnSysProject/cmnSysProject.controller';
import { CmnSysProjectService } from './cmnSysProject/cmnSysProject.service';
import { CmnAppReFormController } from './cmnAppReForm/cmnAppReForm.controller';
import { CmnAppReFormService } from './cmnAppReForm/cmnAppReForm.service';

@Module({
  imports: [],
  controllers: [
    CmnSysProjectController,
    CmnAppReFormController,
  ],
  providers: [
    CmnSysProjectService,
    CmnAppReFormService,
  ]
})
export class AuthModule {}
