import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapreducefilterComponent } from './mapreducefilter.component';

describe('MapreducefilterComponent', () => {
  let component: MapreducefilterComponent;
  let fixture: ComponentFixture<MapreducefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapreducefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapreducefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
