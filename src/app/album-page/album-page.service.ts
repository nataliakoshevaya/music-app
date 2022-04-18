import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import {
  SongRequestBodyType,
  UserPlaylistItemType,
} from '../shared/types/player.type';

@Injectable()
export class AlbumPageService {
  constructor(private http: HttpClient) {}

  getAlbum<T>(type: string, id: string): Observable<T> {
    return this.http.get<T>(
      type === 'album' ? `/spotify/albums/${id}` : `/spotify/tracks/${id}`
    );
  }

  getPlaylist(playlistId: string): Observable<UserPlaylistItemType> {
    const accessToken = localStorage.getItem('userSpotifyRefreshToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.http.get<UserPlaylistItemType>(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers,
      }
    );
  }

  addSongToPlaylist(
    body: SongRequestBodyType,
    playlistId: string
  ): Observable<{ snapshot_id: string }> {
    const headers = {
      Authorization: `Bearer ${environment.ACCESS_SPOTIFY_USER_TOKEN}`,
    };

    return this.http.post<{ snapshot_id: string }>(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      body,
      {
        headers,
      }
    );
  }
}
