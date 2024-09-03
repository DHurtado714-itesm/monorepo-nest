import { Controller } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @EventPattern('new_email')
  handleNewMail(data: any) {
    console.log('Incoming mail', data);
  }
}
