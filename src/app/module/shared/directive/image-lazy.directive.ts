import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[imageLazyLoad]'
})
export class ImageLazyDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else { }
  }
}
