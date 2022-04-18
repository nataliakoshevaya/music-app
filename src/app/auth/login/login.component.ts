import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { auth } from '../store/actions/auth.actions';
import { selectAuthError } from '../store/selectors/auth.selector';
import { IAppState } from '../store/state/auth.state';
import { UserCredentialType } from '../types/auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  serverErrorMessage$!: Observable<string | null>;

  requestUrl = '/users/signin';

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const loginData: UserCredentialType = this.loginForm.value;

    if (this.loginForm.valid) {
      this.store.dispatch(
        auth({ url: this.requestUrl, credentials: loginData })
      );
      this.serverErrorMessage$ = this.store.pipe(select(selectAuthError));
    }
  }
}
