import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs';
import { UserPlaylistService } from '../../user-playlist.service';

@Component({
  selector: 'app-user-playlist-form',
  templateUrl: './user-playlist-form.component.html',
  styleUrls: ['./user-playlist-form.component.scss'],
})
export class UserPlaylistFormComponent implements OnInit, OnDestroy {
  createUserPlaylistForm!: FormGroup;

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private fb: FormBuilder,
    private userPlaylistService: UserPlaylistService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<UserPlaylistFormComponent>
  ) {}

  ngOnInit(): void {
    this.createUserPlaylistForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      public: [false, Validators.required],
    });
  }

  onSubmit(): void {
    this.userPlaylistService
      .createPlaylist(this.createUserPlaylistForm.value)
      .subscribe({
        next: () => {
          this.toastr.success('Player added successfully');
          this.dialogRef.close();
        },
        error: (e: HttpErrorResponse) => this.toastr.error(e.message),
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
