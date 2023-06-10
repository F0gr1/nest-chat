import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('app')
export class AppController {
  constructor(
    private prisma: PrismaService
  ){}

  @Get("list")
  async getList() { 
    const result = await this.prisma.chat.findMany()
    return [ 
      ...result
    ]  
  }
}
