import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BotsService } from './bots.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { generateDicebearAvatar } from 'src/helpers/dicebearHelper';
import { Bot } from '@prisma/client';

@Controller('bots')
export class BotsController {
  constructor(private readonly botsService: BotsService) {}

  // Create Bot Method
  @Post('create')
  async create(@Body() createBotDto: CreateBotDto) {
    // Create Bot
    const bot: Bot = await this.botsService.create(createBotDto);
    const { name, id } = bot;

    // Generate Avatar picture
    const picture = await generateDicebearAvatar(`${name}-${id}`);

    // Update bot with picture
    const updateBotDto: UpdateBotDto = { picture: picture };
    const updatedBot: Bot = await this.botsService.update(id, updateBotDto);

    return {
      isSuccessful: true,
      message: 'Bot successfully created',
      data: updatedBot,
    };
  }

  // Get All Bots Method
  @Get('all')
  async findAll() {
    const allBots: Bot[] = await this.botsService.findAll();
    return allBots;
  }

  // Get Specific Bot Method
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const parseId = parseInt(id);
    const bot: Bot = await this.botsService.findOne(parseId);
    return bot;
  }

  // Update Specific Bot Method
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBotDto: UpdateBotDto) {
    const parseId = parseInt(id);
    const updatedBot: Bot = await this.botsService.update(
      parseId,
      updateBotDto,
    );
    return updatedBot;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const parseId = parseInt(id);

    // prevent deletion of seed bot
    if (parseId === 1) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          isSuccessful: false,
          message: 'You cannot delete optimus pride.',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const bot: Bot = await this.botsService.findOne(parseId);
    const botId = bot.id;
    const botName = bot.name;
    await this.botsService.remove(parseId);
    return {
      message: `Successfully removed bot: ${botName}, id: ${botId}`,
    };
  }
}
