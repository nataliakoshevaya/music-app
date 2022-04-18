/* eslint-disable @angular-eslint/directive-class-suffix */
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() tracksList: any[] = [];

  @Input() isLoading: boolean = false;

  private slideItemWidth!: number;

  private carouselWidth!: number;

  private slidesAmount!: number;

  private player!: AnimationPlayer;

  @ViewChild('carouselAnimation') elementRef!: ElementRef;

  @ViewChild('carouselItem', { read: ElementRef }) carouselItem!: ElementRef;

  @ViewChild('carousel') carousel!: ElementRef;

  index: number = 0;

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit(): void {
    this.slideItemWidth =
      this.carouselItem.nativeElement.getElementsByClassName(
        'slide-item'
      )[0].offsetWidth;

    this.carouselWidth = (
      this.carousel.nativeElement as HTMLElement
    ).getBoundingClientRect().width;

    this.slidesAmount = Math.floor(this.carouselWidth / this.slideItemWidth);
  }

  private buildAnimation(offset: number): AnimationFactory {
    return this.builder.build([
      animate('300ms', style({ transform: `translateX(-${offset}px)` })),
    ]);
  }

  onPreviousClick(): void {
    if (this.index === 0) return;

    this.index--;

    const offset = this.index * (this.carouselWidth + 25);

    const animationFactory = this.buildAnimation(offset);

    this.player = animationFactory.create(this.elementRef.nativeElement);

    this.player.play();
  }

  onNextClick(): void {
    this.index++;

    if (this.index * this.slidesAmount >= this.tracksList.length) return;

    const offset = this.index * (this.carouselWidth + 25);

    const animationFactory = this.buildAnimation(offset);

    this.player = animationFactory.create(this.elementRef.nativeElement);

    this.player.play();
  }

  setDisabledButton(button: string): boolean {
    return this.isDisabled().includes(button);
  }

  isDisabled(): string {
    switch (true) {
      case this.index === 0 &&
        (this.index + 1) * this.slidesAmount >= this.tracksList.length:
        return 'prev next';
      case (this.index + 1) * this.slidesAmount >= this.tracksList.length:
        return 'next';
      case this.index === 0:
        return 'prev';
      default:
        return '';
    }
  }
}
