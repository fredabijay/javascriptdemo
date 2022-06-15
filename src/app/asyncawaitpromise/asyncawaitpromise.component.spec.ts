import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncawaitpromiseComponent } from './asyncawaitpromise.component';

describe('AsyncawaitpromiseComponent', () => {
  let component: AsyncawaitpromiseComponent;
  let fixture: ComponentFixture<AsyncawaitpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncawaitpromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncawaitpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
