import { Injectable, OnModuleInit } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutDownHooks(app: NestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
