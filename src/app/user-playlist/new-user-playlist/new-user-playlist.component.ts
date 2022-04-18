import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserPlaylistsType } from 'src/app/shared/types/player.type';
import { UserPlaylistFormComponent } from './user-playlist-form/user-playlist-form.component';

@Component({
  selector: 'app-new-user-playlist',
  templateUrl: './new-user-playlist.component.html',
  styleUrls: ['./new-user-playlist.component.scss'],
})
export class NewUserPlaylistComponent {
  @Output() getUserPlaylist = new EventEmitter<UserPlaylistsType>();

  constructor(public dialog: MatDialog) {}

  openCreatePlaylistForm() {
    const dialogRef = this.dialog.open(UserPlaylistFormComponent, {
      height: '300px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUserPlaylist.emit();
    });
  }
}
