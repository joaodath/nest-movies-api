import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { GenreModule } from './genre/genre.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [MovieModule, PrismaModule, GenreModule, StaffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
