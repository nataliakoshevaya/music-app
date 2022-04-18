import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  confirmPassword,
  ConfirmValidParentMatcher,
  customErrorMessages,
  regExps,
} from 'src/app/shared/custom-validators/custom-validators';
import { auth } from '../store/actions/auth.actions';
import { selectAuthError } from '../store/selectors/auth.selector';
import { IAppState } from '../store/state/auth.state';
import { RegistrationUsersDataType } from '../types/auth.type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  passwordsGroup!: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  serverErrorMessage$!: Observable<string | null>;

  customErrorMessages = customErrorMessages;

  requestUrl = '/users/register';

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
    });

    this.passwordsGroup = this.fb.group(
      {
        password: [
          '',
          [Validators.required, Validators.pattern(regExps['password'])],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: confirmPassword }
    );
  }

  onSubmit(): void {
    const registrationData: RegistrationUsersDataType = {
      ...this.registrationForm.value,
      password: this.passwordsGroup.value.password,
    };

    this.store.dispatch(
      auth({ url: this.requestUrl, credentials: registrationData })
    );
    this.serverErrorMessage$ = this.store.pipe(select(selectAuthError));
  }
}
