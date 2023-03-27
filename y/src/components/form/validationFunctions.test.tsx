import { RefObject } from 'react';
import { describe, it } from 'vitest';
import {
  validateRadio,
  validateTitle,
  validateDate,
  validateReason,
  validateConcent,
} from './validationFunctions';

describe('testing validateRadio function', () => {
  const mockRefObject: RefObject<HTMLInputElement> = {
    current: {
      checked: true,
    } as HTMLInputElement,
  };
  const emptyRefObject = {
    current: null,
  };

  it('should return "Return money" if radioReturn is checked', () => {
    expect(validateRadio(mockRefObject, emptyRefObject)).toEqual(
      'Return money'
    );
  });

  it('should return "Exchange to another product" if radioExchange is checked', () => {
    expect(validateRadio(emptyRefObject, mockRefObject)).toEqual(
      'Exchange to another product'
    );
  });

  it('should return false if neither radioReturn nor radioExchange is checked', () => {
    expect(validateRadio(emptyRefObject, emptyRefObject)).toEqual(false);
  });
});

describe('testing validateTitle function', () => {
  const mockRefObject: RefObject<HTMLInputElement> = {
    current: {
      value: 'My test',
    } as HTMLInputElement,
  };
  const mockRefObjectInvalid = {
    current: {
      value: 'invalid',
    } as HTMLInputElement,
  };
  const emptyRefObject = {
    current: {
      value: '',
    } as HTMLInputElement,
  };
  it('should return the curren value if the the entered value is equal to the reg exp', () => {
    expect(validateTitle(mockRefObject)).toEqual('My test');
  });

  it('should return false if the current value is not equal to reg exp', () => {
    expect(validateTitle(mockRefObjectInvalid)).toEqual(false);
  });

  it('should return false if input is empty', () => {
    expect(validateTitle(emptyRefObject)).toEqual(false);
  });
});

describe('testing validateDate function', () => {
  const mockRefObject: RefObject<HTMLInputElement> = {
    current: {
      value: '2022-03-26',
    } as HTMLInputElement,
  };
  const mockRefObjectInvalid = {
    current: {
      value: '2024-01-01',
    } as HTMLInputElement,
  };
  const emptyRefObject = {
    current: {
      value: '',
    } as HTMLInputElement,
  };
  it('should return the curren value if the the entered value is equal to the reg exp', () => {
    expect(validateDate(mockRefObject)).toEqual('2022-03-26');
  });

  it('should return false if the current value is not equal to reg exp', () => {
    expect(validateDate(mockRefObjectInvalid)).toEqual(false);
  });

  it('should return false if input is empty', () => {
    expect(validateDate(emptyRefObject)).toEqual(false);
  });
});

describe('testing validateReason function', () => {
  const mockRefObjectNoOption: RefObject<HTMLSelectElement> = {
    current: {
      value: '-choose the reason-',
    } as HTMLSelectElement,
  };
  const mockRefObjectOption1 = {
    current: {
      value: 'Defect',
    } as HTMLSelectElement,
  };
  const mockRefObjectOption2 = {
    current: {
      value: "did't fit, etc",
    } as HTMLSelectElement,
  };
  it('should return false if no option chosen', () => {
    expect(validateReason(mockRefObjectNoOption)).toEqual(false);
  });

  it('should return false if the current value is not equal to reg exp', () => {
    expect(validateReason(mockRefObjectOption1)).toEqual('Defect');
  });

  it('should return false if input is empty', () => {
    expect(validateReason(mockRefObjectOption2)).toEqual("did't fit, etc");
  });
});

describe('testing validateConcent function', () => {
  const mockRefObjectChecked: RefObject<HTMLInputElement> = {
    current: {
      checked: true,
    } as HTMLInputElement,
  };
  const mockRefObjectUnchecked = {
    current: {
      checked: false,
    } as HTMLInputElement,
  };
  it('should return true if it is checked', () => {
    expect(validateConcent(mockRefObjectChecked)).toEqual(true);
  });

  it('should return false if it is unchecked', () => {
    expect(validateConcent(mockRefObjectUnchecked)).toEqual(false);
  });
});
