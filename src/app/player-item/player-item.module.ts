import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerItemComponent } from 'src/app/player-item/player-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayerItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [PlayerItemComponent],
})
export class PlayerItemModule {}
