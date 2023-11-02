import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbMainpageComponent } from './fb-mainpage.component';

describe('FbMainpageComponent', () => {
  let component: FbMainpageComponent;
  let fixture: ComponentFixture<FbMainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbMainpageComponent]
    });
    fixture = TestBed.createComponent(FbMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
