export const validateRadio = (
  radioReturn: React.RefObject<HTMLInputElement>,
  radioExchange: React.RefObject<HTMLInputElement>
): string | false => {
  if (radioReturn.current?.checked) {
    return 'Return money';
  }
  if (radioExchange.current?.checked) {
    return 'Exchange to another product';
  }
  return false;
};

export const validateTitle = (
  inputText: React.RefObject<HTMLInputElement>
): string | false => {
  const regExp = /^[A-Z][a-zA-Z0-9\s]{2,}$/;
  const { value } = inputText.current ?? {};
  return value && regExp.test(value) ? value : false;
};

export const validateDate = (
  date: React.RefObject<HTMLInputElement>
): string | false => {
  let res: string | boolean = false;
  if (date.current) {
    const splitedDate = date.current.value.split('-');
    const dateObj = new Date(
      Number(splitedDate[0]),
      Number(splitedDate[1]) - 1,
      Number(splitedDate[2])
    );
    const today = new Date();
    if (dateObj.getTime() <= today.getTime()) {
      res = date.current.value;
    }
  }
  return res;
};

export const validateFile = (
  inputFile: React.RefObject<HTMLInputElement>
): string | false => {
  const { files } = inputFile.current || {};
  const file = files && files[0];
  return file ? URL.createObjectURL(file) : false;
};

export const validateReason = (
  inputDrop: React.RefObject<HTMLSelectElement>
): string | false => {
  return inputDrop.current?.value !== '-choose the reason-'
    ? inputDrop.current!.value
    : false;
};

export const validateConcent = (
  checkbox: React.RefObject<HTMLInputElement>
): boolean | false => {
  return checkbox.current?.checked ? checkbox.current?.checked : false;
};
