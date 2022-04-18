/* eslint-disable @typescript-eslint/naming-convention */
import {
  FormControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorValidationType } from './custom-validators.type';

export const confirmPassword: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  let pass = group.get('password')?.value;
  let confirmPass = group.get('confirmPassword')?.value;

  return pass === confirmPass ? null : { notSame: true };
};

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control!.parent!.invalid && control!.touched;
  }
}

export const regExps: { [key: string]: RegExp } = {
  password:
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}/,
};

export const customErrorMessages: CustomErrorValidationType = {
  fullName: 'Обязательное поле',
  email: 'должен быть действующий адрес электронной почты (username@domain)',
  password:
    'Пароль должен состоять не менее чем из 8 знаков и содержать как минимум одну строчную букву, одну заглавную букву, один символ и цифру.',
  confirmPassword: 'Пароли не совпадают',
  phoneNumber: 'Введите номер телефона',
};
