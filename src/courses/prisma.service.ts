// src/prisma.service.ts
import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() { await this.$connect(); }
  async onModuleDestroy() { await this.$disconnect(); }

  async enableShutdownHooks(app: INestApplication) {
    // tipagem pode reclamar; este cast evita o erro no editor
    this.$on('beforeExit' as any, async () => { await app.close(); });
  }
}

