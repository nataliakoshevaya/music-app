import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthenticationInterceptorService } from 'src/app/shared/services/authentication-intereceptor.service';
import { ToastrModule } from 'ngx-toastr';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlbumPageService } from './album-page/album-page.service';
import { ProfileService } from './profile/profile.service';
import { UserPlaylistModule } from './user-playlist/user-playlist.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { UserEffect } from './store/effects/user.effec';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserPlaylistModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true,
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    AlbumPageService,
    ProfileService,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.authenticationService.getToken().subscribe((token) => {
      this.localStorageService.setTokenInLocalStorage(
        'spotifyToken',
        token.access_token
      );

      appRef.bootstrap(AppComponent);
    });
  }
}
