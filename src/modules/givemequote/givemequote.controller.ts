import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GMQService } from './givemequote.service';

@Controller('givemequote')
export class GMQController {
    constructor(private readonly gmqService: GMQService) { }
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getMeQuote() {
        return await this.gmqService.giveMeQ();
    }
}
