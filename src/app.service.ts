import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'API NestJS funcionando com sucesso!',
      project: 'Brunao',
      status: 'online',
    };
  }

  getStatus() {
    return {
      application: 'brunao-api',
      environment: process.env.NODE_ENV ?? 'development',
      nodeVersion: process.version,
      uptimeSeconds: Math.floor(process.uptime()),
      currentDate: new Date().toISOString(),
    };
  }
}