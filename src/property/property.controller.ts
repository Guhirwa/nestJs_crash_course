import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  @HttpCode(200)
  findAll() {
    return 'All properties';
  }

  @Post()
  @HttpCode(202)
  create(@Body('id') id: number, @Body('name') name: string) {
    return {
      success: true,
      message: 'Body have been verifyied',
      'Your id': id,
      'Your name': name,
    };
  }

  @Get(':id/:slug')
  @HttpCode(200)
  findOne(@Param('id') id: number, @Param('slug') slug: string) {
    return {
      success: true,
      message: 'Get the body',
      id,
      slug,
    };
  }
}
