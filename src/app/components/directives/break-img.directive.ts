import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBreakImg]',
})
export class BreakImgDirective implements OnInit {
  @Input() urlCustom: String;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('error')
  loadDefaultImage() {
    console.log('Esta imagen esta rota:', this.elementRef.nativeElement);
    const element = this.elementRef.nativeElement;
    element.src =
      this.urlCustom ||
      'https://www.haedosrl.com.ar/images/frontend/notfound.png';
  }
}
