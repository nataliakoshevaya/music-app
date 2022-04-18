import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { logOut } from '../store/actions/user.action';
import { selectIsAuth } from '../store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langList = [{ value: 'ru' }, { value: 'en' }];

  selectedLang = this.langList[0].value;

  isAuth$!: Observable<boolean>;

  constructor(
    private translate: TranslateService,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.pipe(select(selectIsAuth));
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  logout() {
    this.store.dispatch(logOut());
  }
}
