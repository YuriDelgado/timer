import toTime from './time';

describe('Time', () => {
  it('return an object from an amount of seconds given', () => {
    expect(toTime(70)).toEqual({ days: 0, hours: 0, minutes: 1, seconds: 10 });
  });
});
