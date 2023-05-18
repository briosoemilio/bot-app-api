import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll() {
    const allBots: Bot[] = await this.prisma.bot.findMany();
    return allBots;
  }

  async findOne(id: number) {
    const bot: Bot = await this.prisma.bot.findUnique({ where: { id } });
    return bot;
  }

  // Update Bot Service
  async update(id: number, updateBotDto: UpdateBotDto) {
    const updatedBot: Bot = await this.prisma.bot.update({
      where: { id },
      data: updateBotDto,
    });
    return updatedBot;
  }

  async remove(id: number) {
    await this.prisma.bot.delete({ where: { id } });
  }
}
