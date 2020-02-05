import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RotaPage } from './rota.page';

describe('RotaPage', () => {
  let component: RotaPage;
  let fixture: ComponentFixture<RotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
