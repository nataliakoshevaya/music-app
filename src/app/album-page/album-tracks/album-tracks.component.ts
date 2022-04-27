/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, ReplaySubject } from 'rxjs';
import {
  PlaylistItemType,
  TracksItemType,
  UserPlaylistItemType,
  UserPlaylistsType,
} from 'src/app/shared/types/player.type';
import { selectIsAuth } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { UserPlaylistService } from 'src/app/user-playlist/user-playlist.service';
import { AlbumPageService } from '../album-page.service';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.scss'],
})
export class AlbumTracksComponent implements OnInit, OnDestroy {
  @Input() tracksList!: TracksItemType[];

  @Input() playlistTracks!: PlaylistItemType[];

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  playlistList$!: Observable<UserPlaylistItemType[]>;

  successMessage: string = '';

  isAuth$!: Observable<boolean>;

  constructor(
    private profileService: UserPlaylistService,
    private albumPageService: AlbumPageService,
    private toastr: ToastrService,
    private store: Store<IAppState>
  ) {}

  displayedColumns: string[] = [
    'play-btn',
    'track',
    'artist',
    'track-duration',
    'menu',
  ];

  dataSource = new MatTableDataSource<TracksItemType>();

  @Output() urlData = new EventEmitter<{ songUrl: string; songName: string }>();

  ngOnInit(): void {
    this.dataSource.data = !!this.tracksList
      ? this.tracksList
      : this.playlistTracks.map((playlist: PlaylistItemType) => playlist.track);

    this.isAuth$ = this.store.pipe(select(selectIsAuth));

    this.getPlaylists();
  }

  addSongToPlaylist(playlistId: string, songId: string): void {
    const body = {
      uris: [songId],
      position: 0,
    };

    this.albumPageService.addSongToPlaylist(body, playlistId).subscribe({
      next: () => {
        this.successMessage = 'added to playlist';
        this.toastr.info(this.successMessage);
      },
      error: (e) => console.error(e),
    });
  }

  getPlaylists(): void {
    this.playlistList$ = this.profileService
      .getUsersPlaylists()
      .pipe(map((playlists: UserPlaylistsType) => playlists.items));
  }

  setSong({ preview_url, name }: TracksItemType): void {
    const audioData = {
      songUrl: preview_url,
      songName: name,
    };

    this.urlData.emit(audioData);
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
