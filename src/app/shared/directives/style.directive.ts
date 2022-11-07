import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective implements OnInit {
  @HostBinding('style.color') color: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('black');
  }

  @HostListener('mouseclick') onclick() {
    this.el.nativeElement.style.color = 'purple';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() {
    this.color = 'red';
  }
}
