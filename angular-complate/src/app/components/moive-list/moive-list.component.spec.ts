import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveListComponent } from './moive-list.component';

describe('MoiveListComponent', () => {
  let component: MoiveListComponent;
  let fixture: ComponentFixture<MoiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
