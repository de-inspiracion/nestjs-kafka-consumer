import { Controller, Get, Post } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('test1')
  receives(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log('-------test1---------');
    console.log(message);
    console.log(context.getTopic());
    console.log(context.getMessage());
    console.log('----------------');
  }

  @EventPattern('test2')
  receives2(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log('-------test2---------');
    console.log(message);
    console.log(context.getTopic());
    console.log(context.getMessage());
    console.log('----------------');
  }
}
