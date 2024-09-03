import { Body, Controller, Post } from '@nestjs/common';
import { AppService, UserDto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newUser(@Body() body: UserDto): Promise<string> {
    return this.appService.newUser(body);
  }
}
