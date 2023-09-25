import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  let pipe: DatePipe;

  beforeEach(() => {
    pipe = new DatePipe();
  });

  it('debería crear una instancia del pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería transformar la fecha actual a "Hoy"', () => {
    const fechaActual = new Date();
    const resultado = pipe.transform(fechaActual);

    expect(resultado).toEqual('Hoy');
  });

  it('debería transformar la fecha de ayer a "Ayer"', () => {
    const fechaDeAyer = new Date();
    fechaDeAyer.setDate(fechaDeAyer.getDate() - 1);
    const resultado = pipe.transform(fechaDeAyer);
    expect(resultado).toEqual('Ayer');
  });

  it('debería transformar una fecha que no sea ni ayer ni hoy a otro formato', () => {
    const fechaNoHoyNiAyer = '2023/09/20';
    const resultado = pipe.transform(fechaNoHoyNiAyer);
    expect(resultado).toEqual('20/09/2023');
  });

  it('debería devolver una cadena vacía si se proporciona una fecha inválida', () => {
    const fechaInvalida = 'fecha-invalida';
    const resultado = pipe.transform(fechaInvalida);
    expect(resultado).toEqual('');
  });
});
