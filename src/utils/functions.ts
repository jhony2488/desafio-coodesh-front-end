/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
export const dateFormat = (value: string) => {
  const year = value.substring(0, 4);
  const day = value.substring(8, 10);
  const month = value.substring(5, 7);
  return `${day}/${month}/${year}`;
};

export const sortFunction = (a: any, b: any, value: string) => {
  const dateA = new Date(a.updatedAt).getTime();
  const dateB = new Date(b.updatedAt).getTime();
  if (value == 'Mais antigas') {
    return dateA < dateB ? 1 : -1;
  }
  return dateA > dateB ? 1 : -1;
};

export const parOrImpar = (number: number) => {
  if (number % 2 === 0) {
    return 'Par';
  }
  return 'Impar';
};
