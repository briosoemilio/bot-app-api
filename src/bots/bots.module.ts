import { Module } from '@nestjs/common';
import { BotsService } from './bots.service';
import { BotsController } from './bots.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BotsController],
  providers: [PrismaService, BotsService],
})
export class BotsModule {}
