import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ensure that 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnAdd'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnIgual = fixture.debugElement.query(By.css('#btnIgual'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3?.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma?.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2?.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnIgual?.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');

  })

});
