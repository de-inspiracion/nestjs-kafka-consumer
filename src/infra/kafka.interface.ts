import { Observable } from 'rxjs';

export interface KafkaInterface {
  send: (message: string) => Observable<any>;
}
