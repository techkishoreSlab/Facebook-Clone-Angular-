import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookhomepageComponent } from './facebookhomepage.component';

describe('FacebookhomepageComponent', () => {
  let component: FacebookhomepageComponent;
  let fixture: ComponentFixture<FacebookhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookhomepageComponent]
    });
    fixture = TestBed.createComponent(FacebookhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
