import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  let pipe: DatePipe;

  beforeEach(() => {
    pipe = new DatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "2023-09-22" to "Hoy"', () => {
    const inputDate = '2023/09/22';
    const result = pipe.transform(inputDate);

    expect(result).toEqual('Hoy');
  });

  it('should transform "2023-09-21" to "Ayer"', () => {
    const inputDate = '2023/09/21';
    const result = pipe.transform(inputDate);
    expect(result).toEqual('Ayer');
  });

  it('should transform "2023-09-20" to "20/09/2023"', () => {
    const inputDate = '2023/09/20';
    const result = pipe.transform(inputDate);
    expect(result).toEqual('20/09/2023');
  });

  it('should transform an invalid date to an empty string', () => {
    const inputDate = 'invalid-date';
    const result = pipe.transform(inputDate);
    expect(result).toEqual('');
  });
});
