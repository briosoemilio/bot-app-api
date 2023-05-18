import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Bot } from '@prisma/client';

@Injectable()
export class BotsService {
  constructor(private prisma: PrismaService) {}

  // Create Bot Service
  async create(createBotDto: CreateBotDto) {
    const bot: Bot = await this.prisma.bot.create({ data: createBotDto });
    return bot;
  }

  findAll() {
    return `This action returns all bots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bot`;
  }

  // Update Bot Service
  async update(id: number, updateBotDto: UpdateBotDto) {
    const updatedBot: Bot = await this.prisma.bot.update({
      where: { id },
      data: updateBotDto,
    });
    return updatedBot;
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
