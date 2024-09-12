import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async solveProblems() {
    return await this.prisma.$executeRaw`
    UPDATE "User"
    SET "hasProblems" = false
    WHERE "hasProblems" = true
    `;
  }
}
