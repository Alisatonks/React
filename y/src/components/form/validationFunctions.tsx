export const validateTitle = (inputText: string): boolean => {
  if (!inputText) {
    return false;
  }
  const regExp = /^[A-Z][a-zA-Z0-9\s]{2,}$/;
  return regExp.test(inputText);
};

export const validateDate = (date: string): boolean => {
  if (!date) {
    return false;
  }
  const splitedDate = date.split('-');
  const dateObj = new Date(
    Number(splitedDate[0]),
    Number(splitedDate[1]) - 1,
    Number(splitedDate[2])
  );
  const today = new Date();
  return dateObj.getTime() <= today.getTime();
};

export const validateReason = (inputDrop: string): boolean => {
  return inputDrop !== '-choose the reason-';
};

export const validateConcent = (checkbox: boolean): boolean => {
  return checkbox === true;
};
