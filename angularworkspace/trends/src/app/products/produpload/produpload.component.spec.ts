import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduploadComponent } from './produpload.component';

describe('ProduploadComponent', () => {
  let component: ProduploadComponent;
  let fixture: ComponentFixture<ProduploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
