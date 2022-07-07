import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  exports: [CpuService],
  imports: [PowerModule],
})
export class CpuModule {}
