import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { AlbumPageRoutingModule } from './album-page-routing.module';
import { AlbumPageComponent } from './album-page.component';
import { PlayerComponent } from '../player/player.component';
import { AlbumTracksComponent } from './album-tracks/album-tracks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AlbumPageComponent, PlayerComponent, AlbumTracksComponent],
  imports: [
    CommonModule,
    AlbumPageRoutingModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [AlbumPageComponent, PlayerComponent, AlbumTracksComponent],
  providers: [],
})
export class AlbumPageModule {}
