import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Post()
  create(@Body('id') id: number, @Body('name') name: string) {
    return {
      success: true,
      message: 'Body have been verifyied',
      'Your id': id,
      'Your name': name,
    };
  }

  @Get(':id/:slug')
  findOne(@Param('id') id: number, @Param('slug') slug: string) {
    return {
      success: true,
      message: 'Get the body',
      id,
      slug,
    };
  }
}
