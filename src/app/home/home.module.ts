import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { PlayerService } from 'src/app/shared/services/player.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [HomeComponent],
  providers: [PlayerService],
})
export class HomeModule {}
