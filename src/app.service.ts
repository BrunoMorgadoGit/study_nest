import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'API NestJS funcionando com sucesso!',
      project: 'Brunao',
      status: 'online',
      nodeVersion: process.version,
      timestamp: new Date().toISOString(),
    };
  }
}