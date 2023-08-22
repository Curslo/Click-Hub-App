// import { Inject, Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { Task } from "schema/task.schema";
// import { Taskinput } from "src/dto/task.dto";

// @Injectable()
// export class ClickupService {
//     constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
//     create(taskInput: Taskinput) {
        
//         //Collect user details
//         const createdTask = new this.taskModel(taskInput)
//         return createdTask.save()
//     }
// }

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ClickupService {
  async sendWebhook(payload: any) {
    try {
      const webhookUrl = 'https://app.clickup.com/9009024331/v/l/8cfnkab-1200?pr=90090334078'; // Replace with your actual webhook URL
      const response = await axios.post(webhookUrl, payload);

      if (response.status === 200) {
        console.log(response, 'Webhook sent successfully');
      } else {
        console.error('Failed to send webhook:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending webhook:', error.message);
    }
  }
}
