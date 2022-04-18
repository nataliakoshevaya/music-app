import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/shared/services/player.service';
import {
  NewReleaseItemsType,
  NewReleaseType,
  RecommendationType,
  TracksType,
} from 'src/app/shared/types/player.type';
import { SpotifyApi } from 'src/app/shared/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  token: string = '';

  isLoading: boolean = false;

  accessToken!: string | null;

  tracksList: TracksType[] = [];

  newReleasesList: NewReleaseItemsType[] = [];

  serverErrorMessage!: string;

  constructor(
    private playerService: PlayerService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNewReleasesList();
    this.getRecommendationList();

    const queryParams = this.router.url;
    const tknList = queryParams?.split(/[#&]/)[1]?.split('=')[1];

    if (tknList) localStorage.setItem('userSpotifyRefreshToken', tknList);
  }

  getRecommendationList() {
    this.isLoading = true;

    this.playerService
      .getTracks<RecommendationType>(
        `/spotify/${SpotifyApi.RECOMMENDATION_LIST_UR}`
      )
      .subscribe({
        next: ({ tracks }) => {
          return (this.tracksList = tracks);
        },
        error: (e: HttpErrorResponse) => {
          return (this.serverErrorMessage = e.statusText);
        },
        complete: () => (this.isLoading = false),
      });
  }

  getNewReleasesList() {
    this.playerService
      .getTracks<NewReleaseType>(`/spotify/${SpotifyApi.NEW_RELEASES_URL}`)
      .subscribe((newReleases) => {
        this.isLoading = false;
        return (this.newReleasesList = newReleases.albums.items);
      });
  }
}
