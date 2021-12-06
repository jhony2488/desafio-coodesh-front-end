/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
export const dateFormat = (value: string) => {
  const year = value.substring(0, 4);
  const day = value.substring(8, 10);
  const month = value.substring(5, 7);
  return `${day}/${month}/${year}`;
};

export const parOrImpar = (number: number) => {
  if (number % 2 === 0) {
    return 'Par';
  }
  return 'Impar';
};
