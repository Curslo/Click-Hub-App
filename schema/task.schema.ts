import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {

    @Prop()
    event: string;

    @Prop()
    history_items: [];

    @Prop()
    task_id: string;

    @Prop()
    webhook_id: string;
}


export const TaskSchema = SchemaFactory.createForClass(Task);