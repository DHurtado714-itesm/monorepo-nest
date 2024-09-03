import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

export interface UserDto {
  email: string;
  name: string;
}

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async newUser(user: UserDto): Promise<string> {
    this.client.emit('new_email', user);
    return 'send_queue';
  }
}
