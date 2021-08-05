import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerContentComponent } from './container-content.component';

describe('ContainerContentComponent', () => {
  let component: ContainerContentComponent;
  let fixture: ComponentFixture<ContainerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
