import { Module } from '@nestjs/common';
import { UsuariosController } from './usuario.controller';
import { UsuariosService } from './usuario.service';
import { PrismaService } from '../courses/prisma.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService],
})
export class UsuariosModule {}
