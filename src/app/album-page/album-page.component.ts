/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {
  AlbumType,
  ArtistItemType,
  PlaylistItemType,
  SongParamsType,
  TracksItemType,
  TracksType,
  UserPlaylistItemType,
} from '../shared/types/player.type';

import { AlbumPageService } from './album-page.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  type: string = '';

  id: string = '';

  albumItems!: any;

  name!: string;

  artists!: ArtistItemType[];

  albumPicture: string = '';

  playerSrc!: string;

  tracksList!: TracksItemType[];

  playlistTracks!: PlaylistItemType[];

  playerItem!: UserPlaylistItemType;

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  @ViewChild('audio') audio!: ElementRef;

  constructor(
    private albumService: AlbumPageService,
    private activatedRouter: ActivatedRoute,
    public dialogRef: MatDialogRef<AlbumPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserPlaylistItemType
  ) {}

  ngOnInit(): void {
    this.type = this.activatedRouter.snapshot.params['type'];
    this.id = this.activatedRouter.snapshot.params['id'];

    if (this.type !== 'track' && this.type !== 'album') {
      this.albumService
        .getPlaylist(this.data.id)
        .subscribe((userPlayer: UserPlaylistItemType) => {
          this.playerItem = userPlayer;

          this.playlistTracks = userPlayer.tracks.items;
        });
      return;
    }

    const noAlbumImage = 'assets/img/no_img.png';

    this.albumService
      .getAlbum<AlbumType & TracksType>(this.type, this.id)
      .subscribe((album) => {
        this.albumPicture = album.album
          ? album.album.images[0].url
          : album.images
          ? album.images[0].url
          : noAlbumImage;

        this.albumItems = album;

        this.tracksList = !!album.tracks?.items ? album.tracks.items : [album];
      });
  }

  setSong({ songName, songUrl }: SongParamsType): void {
    this.name = songName;
    this.playerSrc = songUrl;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
