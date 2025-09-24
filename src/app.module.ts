// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuario/usuario.module';

@Module({ imports: [UsuariosModule] })
export class AppModule {}
