import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveComponent } from './moive.component';

describe('MoiveComponent', () => {
  let component: MoiveComponent;
  let fixture: ComponentFixture<MoiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
