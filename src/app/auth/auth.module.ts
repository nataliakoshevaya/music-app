import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './store/effects/auth.effects';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  exports: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    AuthRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [AuthService, LocalStorageService],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
