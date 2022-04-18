import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setTokenInLocalStorage(key: string, keyValue: string): void {
    localStorage.setItem(key, keyValue);
  }

  removeToken(key: string): void {
    localStorage.removeItem(key);
  }
}
