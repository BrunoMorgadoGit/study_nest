import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'API NestJS funcionando com sucesso!',
      status: 'online',
    };
  }
}