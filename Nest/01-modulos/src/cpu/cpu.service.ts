import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {
    console.log('Cpu service created.');
  }

  compute(a: number, b: number) {
    this.powerService.supply();
    return a + b;
  }
}
