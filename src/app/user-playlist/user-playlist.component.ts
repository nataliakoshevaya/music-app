import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AlbumPageComponent } from 'src/app/album-page/album-page.component';
import { UserPlaylistItemType } from '../shared/types/player.type';
import { UserPlaylistService } from './user-playlist.service';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.scss'],
})
export class UserPlaylistComponent implements OnInit, OnDestroy {
  userSpotifyId = 'fk2lgels8uptm18ksi19wvagr';

  userPlaylists!: UserPlaylistItemType[];

  name!: string;

  type: string = '';

  id: string = '';

  dialogParams: string = '';

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private userPlaylistService: UserPlaylistService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dialogParams = this.route.snapshot.params['dialog'];

    route.queryParams.subscribe((queryParam) => {
      this.type = queryParam['type'];
      this.id = queryParam['id'];
      if (queryParam['dialog']) {
        this.openDialog(this.type, this.id);
      }
    });
  }

  ngOnInit(): void {
    this.getUserPlaylist();
  }

  getUserPlaylist(): void {
    this.userPlaylistService
      .getUsersPlaylists()
      .subscribe((userPlaylists) => (this.userPlaylists = userPlaylists.items));
  }

  openDialog(type: string, id: string): void {
    const dialogRef = this.dialog.open(AlbumPageComponent, {
      minWidth: '650px',
      data: { type, id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
