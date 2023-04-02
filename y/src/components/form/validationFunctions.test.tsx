import { describe, it } from 'vitest';
import {
  validateTitle,
  validateDate,
  validateReason,
  validateConcent,
} from './validationFunctions';

describe('testing validateTitle function', () => {
  const titleValid = 'My test';

  const titleInvalid = 'invalid';

  const emptyString = '';

  it('should return true if entered value is equal to the reg exp', () => {
    expect(validateTitle(titleValid)).toEqual(true);
  });

  it('should return false if the current value is not equal to reg exp', () => {
    expect(validateTitle(titleInvalid)).toEqual(false);
  });

  it('should return false if input is empty', () => {
    expect(validateTitle(emptyString)).toEqual(false);
  });
});

describe('testing validateDate function', () => {
  const validDate = '2022-03-26';

  const invalidDate = '2024-01-01';

  const emptyDate = '';

  it('should return true if the the entered value is equal to the reg exp', () => {
    expect(validateDate(validDate)).toEqual(true);
  });

  it('should return false if the current value is not equal to reg exp', () => {
    expect(validateDate(invalidDate)).toEqual(false);
  });

  it('should return false if input is empty', () => {
    expect(validateDate(emptyDate)).toEqual(false);
  });
});

describe('testing validateReason function', () => {
  const invalidReason = '-choose the reason-';

  const reasonOption1 = 'Defect';

  const reasonOption2 = "did't fit, etc";

  it('should return false if no option chosen', () => {
    expect(validateReason(invalidReason)).toEqual(false);
  });

  it('should return true if the current value is equal to Defect', () => {
    expect(validateReason(reasonOption1)).toEqual(true);
  });

  it('should return true if the current value is equal to option2', () => {
    expect(validateReason(reasonOption2)).toEqual(true);
  });
});

describe('testing validateConcent function', () => {
  const checked = true;

  const unchecked = false;

  it('should return true if it is checked', () => {
    expect(validateConcent(checked)).toEqual(true);
  });

  it('should return false if it is unchecked', () => {
    expect(validateConcent(unchecked)).toEqual(false);
  });
});
