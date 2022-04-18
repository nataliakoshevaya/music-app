import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserPlaylistsType } from '../shared/types/player.type';

interface IPlaylistData {
  name: string;
  description: string;
  public: boolean;
}

@Injectable()
export class UserPlaylistService {
  spotifyTkn = localStorage.getItem('userSpotifyRefreshToken');

  userId = 'fk2lgels8uptm18ksi19wvagr';

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  createPlaylist<T>(playlistData: IPlaylistData): Observable<T> {
    const headers = {
      Authorization: `Bearer ${this.spotifyTkn}`,
    };
    return this.http.post<T>(
      `https://api.spotify.com/v1/users/${this.userId}/playlists`,
      playlistData,
      { headers }
    );
  }

  getUsersPlaylists(): Observable<UserPlaylistsType> {
    const headers = {
      Authorization: `Bearer ${this.spotifyTkn}`,
    };
    return this.http.get<UserPlaylistsType>(
      `https://api.spotify.com/v1/users/${this.userId}/playlists`,
      {
        headers,
      }
    );
  }
}
