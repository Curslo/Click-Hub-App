import { Controller, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema, Task } from 'schema/task.schema';
import { ClickupController } from './clickup.controller';
import { ClickupService } from './clickup.service';


@Module({
    imports:[MongooseModule.forFeature([{name: Task.name,
    schema: TaskSchema}])],
    controllers: [ClickupController],
    providers: [ClickupService]
})
export class ClickupModule {}
