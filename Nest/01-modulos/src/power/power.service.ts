import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  constructor() {
    console.log('Power service created.');
  }

  supply() {
    console.log('Supplying power');
  }
}
