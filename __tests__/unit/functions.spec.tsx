import { dateFormat, parOrImpar } from '../../src/utils/functions';

describe('Functions', () => {
  it('should format date value', () => {
    expect(dateFormat('2021-11-30T22:18:53.607Z')).toStrictEqual('30/11/2021');
  });
  it("should show if it's even or odd", () => {
    expect(parOrImpar(2)).toStrictEqual('30/11/2021');
  });
});

