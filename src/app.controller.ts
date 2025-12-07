import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('info')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Informações do projeto' })
  @ApiResponse({ status: 200, description: 'Retorna informações sobre o projeto PokéLab' })
  getHello(): object {
    return this.appService.getHello();
  }
}
