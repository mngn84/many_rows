import { Controller, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('solve-problems')
  async solveProblems() {
    const count = await this.usersService.solveProblems();

    return {message: `Problems of ${count} users have been successfully resolved! ;)`};
  }
}
