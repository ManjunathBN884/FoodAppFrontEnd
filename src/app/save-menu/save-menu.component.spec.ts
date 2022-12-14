import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMenuComponent } from './save-menu.component';

describe('SaveMenuComponent', () => {
  let component: SaveMenuComponent;
  let fixture: ComponentFixture<SaveMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
