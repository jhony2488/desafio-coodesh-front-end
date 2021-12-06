/* eslint-disable @typescript-eslint/no-unsafe-return */
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

export const infiniteScrool = (page: number, items: any[], scroolSize: number) => {
  console.log(page * scroolSize);
  console.log(items);
  const itemsFilter = items.slice(0, page * scroolSize);
  return itemsFilter;
};
