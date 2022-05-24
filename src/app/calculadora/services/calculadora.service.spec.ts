import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should ensure that 1 + 4 = 5', () => {
    expect(service.calcular(1, 4, CalculadoraService.SOMA)).toBe(5);
  });

  it('should ensure that 1 - 4 = -3', () => {
    expect(service.calcular(1, 4, CalculadoraService.SUBTRACAO)).toBe(-3);
  });

  it('should ensure that 1 / 4 = 0.25', () => {
    expect(service.calcular(1, 4, CalculadoraService.DIVISAO)).toBe(0.25);
  });

  it('should ensure that 1 * 4 = 4', () => {
    expect(service.calcular(1, 4, CalculadoraService.MULTIPLICACAO)).toBe(4);
  });

  it('should return 0 when the operation is not supported', () => {
    expect(service.calcular(1, 4, '%')).toBe(0);
  });

});
