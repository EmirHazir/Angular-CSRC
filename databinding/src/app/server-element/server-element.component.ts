import { Component, OnInit, Input, ViewEncapsulation, OnDestroy,ViewChild,ElementRef,
         OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,ContentChild
         } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, 
                                               DoCheck, AfterContentInit,
                                               AfterContentChecked, OnDestroy
                                                {
 @Input('srvElement') element:{type:string, name:string, content:string};
 @Input() name:string;
 @ViewChild('heading') header:ElementRef;
 @ContentChild('contentPara') para:ElementRef;

  constructor() {
    console.log('constructor is called')
   }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)

  }

  ngOnInit() {
    console.log('ngOnInit is called')
    console.log('Text İçeriği : ' + this.header.nativeElement.textContent);
    console.log('Text İçeriği para : ' + this.para.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck is called')
    
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called')
    console.log('Text İçeriği para : ' + this.para.nativeElement.textContent);    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called')

  }

  ngOnDestroy() {
    console.log('ngAfterContentChecked is called')
    
  }


}
