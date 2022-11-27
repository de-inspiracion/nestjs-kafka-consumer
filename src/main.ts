import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        // clientId: 'hero',
        brokers: ['localhost:9092'],
      },
      // consumer: {
      //   groupId: 'kafka-testing-message',
      // },
    },
  });
  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
