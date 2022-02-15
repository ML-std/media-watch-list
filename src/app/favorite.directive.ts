import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite:boolean;
  @HostBinding('class.is-favorite-hovering') hovering:boolean;
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }
  @Input() set appFavorite(value:boolean){
    this.isFavorite = value;
  }
  constructor() { 
    this.isFavorite = true;
    this.hovering = false;
  }

}
