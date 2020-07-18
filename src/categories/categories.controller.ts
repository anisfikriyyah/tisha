import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor, Post,
  } from '@nestjs/common';
  import CategoriesService from './categories.service';
  import CreateCategoryDto from './dto/createCategory.dto';
  import UpdateCategoryDto from './dto/updateCategory.dto';
  import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
  import FindOneParams from '../utils/findOneParams';
  import { ApiTags, ApiCreatedResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { number } from '@hapi/joi';
import Joi = require('@hapi/joi');
  
  @ApiTags('Categories')
  @Controller('categories')
  @UseInterceptors(ClassSerializerInterceptor)
  export default class CategoriesController {
    constructor(
      private readonly categoriesService: CategoriesService
    ) {}
  
    @Get()
    getAllCategories() {
      return this.categoriesService.getAllCategories();
    }
  
    @ApiParam({name: 'id', type: number, required: true, example: 1})
    @Get(':id')
    getCategoryById(@Param() { id }: FindOneParams) {
      return this.categoriesService.getCategoryById(Number(id));
    }
  
    @ApiCreatedResponse({
      description: 'The record has been successfully created.',
      type: CreateCategoryDto,
    })
    @Post()
    @UseGuards(JwtAuthenticationGuard)
    async createCategory(@Body() category: CreateCategoryDto) {
      return this.categoriesService.createCategory(category);
    }
  
    @Patch(':id')
    async updateCategory(@Param() { id }: FindOneParams, @Body() category: UpdateCategoryDto) {
      return this.categoriesService.updateCategory(Number(id), category);
    }
  
    @Delete(':id')
    async deleteCategory(@Param() { id }: FindOneParams) {
      return this.categoriesService.deleteCategory(Number(id));
    }
  }