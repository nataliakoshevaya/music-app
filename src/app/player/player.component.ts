import { Component, Input } from '@angular/core';
import { ArtistItemType } from '../shared/types/player.type';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() playerSrc: string = '';

  @Input() albumPicture!: string;

  @Input() name: string = '';

  @Input() artists!: ArtistItemType[];
}
