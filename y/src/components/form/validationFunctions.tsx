export const validateRadio = (
  radioReturn: React.RefObject<HTMLInputElement>,
  radioExchange: React.RefObject<HTMLInputElement>
) => {
  if (radioReturn.current?.checked) {
    return 'Return money';
  }
  if (radioExchange.current?.checked) {
    return 'Exchange to another product';
  }
  return false;
};

export const validateTitle = (inputText: React.RefObject<HTMLInputElement>) => {
  const regExp = /^[A-Z][a-zA-Z0-9\s]{2,}$/;
  const title = inputText.current?.value;
  let res: string | boolean = false;
  if (title && regExp.test(title)) {
    res = title;
  }
  return res;
};

export const validateDate = (date: React.RefObject<HTMLInputElement>) => {
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

export const validateFile = (inputFile: React.RefObject<HTMLInputElement>) => {
  const { files } = inputFile.current || {};
  const file = files && files[0];
  return file ? URL.createObjectURL(file) : false;
};
