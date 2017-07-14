import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkaterComponent } from './edit-skater.component';

describe('EditSkaterComponent', () => {
  let component: EditSkaterComponent;
  let fixture: ComponentFixture<EditSkaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSkaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
