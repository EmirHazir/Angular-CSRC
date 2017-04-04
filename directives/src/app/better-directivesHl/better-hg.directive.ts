import {
  Directive, Renderer2, OnInit, ElementRef,
  HostListener, HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHg]'
})
export class BetterHgDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() hlColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
  }
  @HostListener('mouseenter') onmouseenter(eventData: Event) {
    this.backgroundColor = this.hlColor;
  }
  @HostListener('mouseleave') onmouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}


