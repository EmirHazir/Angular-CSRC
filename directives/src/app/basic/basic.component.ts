import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-basic]'
})
export class BasicComponent implements OnInit {
  constructor(private elRef : ElementRef) {

   }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }

}
