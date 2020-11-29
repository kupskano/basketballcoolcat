import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HalfmodalPage } from './halfmodal.page';

describe('HalfmodalPage', () => {
  let component: HalfmodalPage;
  let fixture: ComponentFixture<HalfmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HalfmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
