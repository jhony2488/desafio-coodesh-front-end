import { dateFormat, parOrImpar, sortFunction } from '../../src/utils/functions';
import { mockInputSearch, mockupSortNovas, mockupSortAntigas } from '../../src/utils/input'

describe('Functions', () => {
  it('should format date value', () => {
    expect(dateFormat('2021-11-30T22:18:53.607Z')).toStrictEqual('30/11/2021');
  });
  it("should show if it is even or odd, in which case it must show 'Even'", () => {
    expect(parOrImpar(2)).toStrictEqual('Par');
  });
  it("should show if it is even or odd, in which case it must show 'Odd'", () => {
    expect(parOrImpar(3)).toStrictEqual('Impar');
  });
  it("should sort the list , from the oldest", () => {
    expect(mockInputSearch.sort((a: any, b: any) =>
      sortFunction(a, b, 'Mais antigas'),
    )).toStrictEqual(mockupSortAntigas);
  });
  it("should sort the list , of the youngest", () => {
    expect(mockInputSearch.sort((a: any, b: any) =>
      sortFunction(a, b, 'Mais novas'),
    )).toStrictEqual(mockupSortNovas);
  });
});

