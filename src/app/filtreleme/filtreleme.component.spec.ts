import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrelemeComponent } from './filtreleme.component';

describe('FiltrelemeComponent', () => {
  let component: FiltrelemeComponent;
  let fixture: ComponentFixture<FiltrelemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrelemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrelemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
