import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  let pipe: StatusPipe;

  beforeEach(() => {
    pipe = new StatusPipe();
  });

  it('debería crear una instancia del pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería transformar "empty" a "Por empezar"', () => {
    const estadoInput = 'empty';
    const resultado = pipe.transform(estadoInput);
    expect(resultado).toEqual('Por empezar');
  });

  it('debería transformar "in-progress" a "En proceso"', () => {
    const estadoInput = 'in-progress';
    const resultado = pipe.transform(estadoInput);
    expect(resultado).toEqual('En proceso');
  });

  it('debería transformar "finished" a "Terminada"', () => {
    const estadoInput = 'finished';
    const resultado = pipe.transform(estadoInput);
    expect(resultado).toEqual('Terminada');
  });
});
