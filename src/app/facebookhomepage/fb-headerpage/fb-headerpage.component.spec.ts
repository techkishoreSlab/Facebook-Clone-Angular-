import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbHeaderpageComponent } from './fb-headerpage.component';

describe('FbHeaderpageComponent', () => {
  let component: FbHeaderpageComponent;
  let fixture: ComponentFixture<FbHeaderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbHeaderpageComponent]
    });
    fixture = TestBed.createComponent(FbHeaderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
