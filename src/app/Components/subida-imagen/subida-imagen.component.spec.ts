import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaImagenComponent } from './subida-imagen.component';

describe('SubidaImagenComponent', () => {
  let component: SubidaImagenComponent;
  let fixture: ComponentFixture<SubidaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubidaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubidaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
