import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MentorService } from './providers/mentor.service';
import { CreateMentorDto } from './dto/createUser.dto';
import { UpdateMentorDto } from './dto/update-user.dto';

@Controller('mentors')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Post()
  create(@Body() createMentorDto: CreateMentorDto) {
    return this.mentorService.create(createMentorDto);
  }

  @Get()
  findAll() {
    return this.mentorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mentorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMentorDto: UpdateMentorDto) {
    return this.mentorService.update(+id, updateMentorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mentorService.remove(+id);
  }
}
