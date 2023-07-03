import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMintComponent } from './ngx-mint.component';

describe('NgxMintComponent', () => {
  let component: NgxMintComponent;
  let fixture: ComponentFixture<NgxMintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMintComponent]
    });
    fixture = TestBed.createComponent(NgxMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
