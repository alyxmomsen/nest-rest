import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  } ; 
  some () :string {
    return 'some hello'
  }
}
