import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'test',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'test-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, ClientKafka],
})
export class AppModule {}
