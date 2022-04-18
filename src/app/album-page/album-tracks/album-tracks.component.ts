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
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import {
  PlaylistItemType,
  TracksItemType,
  UserPlaylistItemType,
} from 'src/app/shared/types/player.type';
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

  playlistList!: UserPlaylistItemType[];

  successMessage: string = '';

  auth: boolean = false;

  constructor(
    private profileService: UserPlaylistService,
    private albumPageService: AlbumPageService,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService
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

    this.authenticationService
      .getAuthUser()
      .subscribe((auth) => (this.auth = auth));

    if (this.auth) this.getPlaylists();
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
    this.profileService.getUsersPlaylists().subscribe((playlists) => {
      this.playlistList = playlists.items;
    });
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
