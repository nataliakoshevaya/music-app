import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPlaylistComponent } from './user-playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { NewUserPlaylistComponent } from './new-user-playlist/new-user-playlist.component';
import { UserPlaylistService } from './user-playlist.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserPlaylistFormComponent } from './new-user-playlist/user-playlist-form/user-playlist-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: UserPlaylistComponent,
  },
];

@NgModule({
  declarations: [
    UserPlaylistComponent,
    NewUserPlaylistComponent,
    UserPlaylistFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
  ],
  exports: [UserPlaylistComponent, NewUserPlaylistComponent],
  providers: [UserPlaylistService],
})
export class UserPlaylistModule {}
