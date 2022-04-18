import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { PlayerItemModule } from 'src/app/player-item/player-item.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    PlayerItemModule,
  ],
  exports: [CarouselComponent],
})
export class CarouselModule {}
