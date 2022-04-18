import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { IAppState } from './store/state/app.state';
import { getUser } from './store/actions/user.action';
import { Store } from '@ngrx/store';

type JWTDecodeType = {
  email: string;
  iat: number;
  exp: number;
  sub: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userToken: string = '';

  constructor(
    private translate: TranslateService,
    private store: Store<IAppState>
  ) {
    this.userToken = localStorage.getItem('userAccessToken') || '';

    this.setDefaultAppLanguage();
    this.userProfile();
  }

  userProfile(): void {
    if (this.userToken) {
      let decoded: JWTDecodeType = jwt_decode(this.userToken);

      const { sub } = decoded;

      this.store.dispatch(getUser({ sub }));
    }
  }

  setDefaultAppLanguage(): Observable<string> {
    const browserLanguage = this.translate.getBrowserLang();

    const currentLanguage = browserLanguage?.match(/en|ru/)
      ? browserLanguage
      : 'en';

    this.translate.setDefaultLang(currentLanguage);
    return this.translate.use(currentLanguage);
  }
}
