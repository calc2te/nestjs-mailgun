import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailgunService } from './providers/mailgun/mailgun.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailgunService: MailgunService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('mail')
  getMail() {
    const messageData = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'foo@example.com, bar@example.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!',
    };

    this.mailgunService.sendMail(messageData);
  }
}
