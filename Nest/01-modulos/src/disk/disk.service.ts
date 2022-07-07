import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {
    console.log('Disk service created.');
  }

  getData() {
    this.powerService.supply();
    return 'data';
  }
}
