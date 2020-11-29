import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMenuPage } from './modal-menu.page';

describe('ModalMenuPage', () => {
  let component: ModalMenuPage;
  let fixture: ComponentFixture<ModalMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
