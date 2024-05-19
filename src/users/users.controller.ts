import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor (private readonly userService:UsersService) {}
    @Get()
    findAll(@Query('role') role?:'ENGINEER'|'INTERN'|'ADMIN'|'THE_FATHER') {
        return this.userService.findAll();
    } ;
    
    @Get(':id')
    findOne() {
        return this.userService.findOne;
    } ;
    @Post()
    create (@Body() user: {}) {
        return user ;
    } ;
    @Patch()
    update(@Param() id:string , @Body() userUpdate:{}) {
        return {
            id , ...userUpdate
        }
    } ;
    @Patch(':id')
    updateById(@Param() id:string , @Body() userUpdate:{}) {
        return {
            id , ...userUpdate
        }
    } ;
    @Delete(':id')
    deleteUser (@Param() id:string , @Body() user: {}) {
        return {
            id , 
            user ,
        }
    }
    
}
