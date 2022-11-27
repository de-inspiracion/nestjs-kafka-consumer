import { Controller, Get, Post } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { ProducerKafka } from './application/producer';

@Controller()
export class AppController {
  ACCU = 1;
  constructor(
    private readonly appService: AppService,
    private producerKafka: ProducerKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendMessageController() {
    const message = JSON.stringify({
      numero: this.ACCU,
    });
    this.ACCU++;
    return this.producerKafka.sendMessage(message);
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

  @EventPattern('disconnect')
  disconect() {
    console.log('disconect');
  }
}
