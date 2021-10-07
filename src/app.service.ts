import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey! My documentation is on GitHub! https://github.com/joaodath/nest-movies-api';
  }
}
