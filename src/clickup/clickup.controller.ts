// import { Body, Controller, Post } from "@nestjs/common";
// import { ClickupService } from "./clickup.service";
// import { Taskinput } from "src/dto/task.dto";

// @Controller('api')
// export class ClickupController {
//     constructor(private clickupService: ClickupService){}
//     @Post()
//     creatTask(@Body() taskInput: Taskinput) {
//         console.log(taskInput)
//         return this.clickupService.create(taskInput)
//     }
// }

import { Controller, Post, Body, Injectable } from '@nestjs/common';
import { ClickupService } from './clickup.service';

@Controller('webhook')
export class ClickupController {
  constructor(private readonly clickupService: ClickupService) {}

  @Post()
  async sendWebhook(@Body() payload: any) {
    await this.clickupService.sendWebhook(payload);
    return 'Webhook request sent.';
  }
}
