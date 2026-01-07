import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Post()
  @HttpCode(202)
  create(@Body('id', ParseIntPipe) id: number, @Body('name') name: string) {
    return {
      success: true,
      message: 'Body have been verified',
      'Your id': id,
      'Your name': name,
    };
  }

  @Get(':id/:slug')
  @HttpCode(200)
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Param('slug') slug: string,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    return {
      success: sort,
      message: 'Retrieved property details',
      id: id,
      slug,
    };
  }
}
