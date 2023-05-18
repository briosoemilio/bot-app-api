import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    const allBots = this.botsService.findAll();
    return allBots;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotDto: UpdateBotDto) {
    return this.botsService.update(+id, updateBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botsService.remove(+id);
  }
}
