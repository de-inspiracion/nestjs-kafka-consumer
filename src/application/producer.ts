import { Inject, Injectable } from '@nestjs/common';
import { ProducerInterface } from 'src/core/domain/producer.interface';
import { KafkaRepositotyInterface } from 'src/core/domain/send.repository';

export class ProducerKafka implements ProducerInterface {
  constructor(
    @Inject('kafkarepository')
    private kafkaRepository: KafkaRepositotyInterface,
  ) {}
  sendMessage(message: string) {
    return this.kafkaRepository.send(message);
  }
}
