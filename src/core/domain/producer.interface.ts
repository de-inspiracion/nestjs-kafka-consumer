export interface ProducerInterface {
  sendMessage: (message: string) => string;
}
