
const { removeSalaries } = require('./removeSalaries');

describe('removeSalaries', () => {
  it('throws if passed a non-array as the salaries argument', () => {
    const expected = 'You must pass an array of numbers';
    expect(() => removeSalaries('Definitely not an array')).toThrow(expected);
  });

  it('throws if any element inside the array is not a number', () => {
    const expected = 'You must pass an array of numbers';
    expect(() => removeSalaries([1, 2, 'Definitely not a number'])).toThrow(expected);
  });

  it('returns an array', () => {
    expect(Array.isArray(removeSalaries([1, 2, 3]))).toBe(true);
  });

  it('removes all salaries less than 50,000', () => {
    const salaries = [55000, 45000, 1, 60000];
    const expected = [55000, 60000];
    expect(removeSalaries(salaries)).toEqual(expected);
  });

  it('does not remove salaries equal to 50,000', () => {
    const salaries = [50000, 50000];
    const expected = [50000, 50000];
    expect(removeSalaries(salaries)).toEqual(expected);
  });
});
