import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileType } from 'src/app/profile/profile.type';
import { selectUser } from '../store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile$!: Observable<ProfileType | null>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.getAuthProfile();
  }

  getAuthProfile(): void {
    this.userProfile$ = this.store.pipe(select(selectUser));
  }
}
