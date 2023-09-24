import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  let pipe: StatusPipe;

  beforeEach(() => {
    pipe = new StatusPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "empty" to "Por empezar"', () => {
    const inputStatus = 'empty';
    const result = pipe.transform(inputStatus);
    expect(result).toEqual('Por empezar');
  });

  it('should transform "in-progress" to "En proceso"', () => {
    const inputStatus = 'in-progress';
    const result = pipe.transform(inputStatus);
    expect(result).toEqual('En proceso');
  });

  it('should transform "finished" to "Terminada"', () => {
    const inputStatus = 'finished';
    const result = pipe.transform(inputStatus);
    expect(result).toEqual('Terminada');
  });
});
