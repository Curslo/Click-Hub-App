import { Module } from '@nestjs/common';
import { ClickupController } from './clickup/clickup.controller';
import { ClickupService } from './clickup/clickup.service';

@Module({
  imports: [],
  controllers: [ClickupController],
  providers: [ClickupService],
})
export class AppModule {}
