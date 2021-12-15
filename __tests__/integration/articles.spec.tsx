import { ServiceHighlights } from '../../src/services/articles'

describe('Articles', () => {
    it('should get articles of API', async () => {
        const res = await ServiceHighlights(() => { }, () => { },
            false,
            { value: '' })
        expect(res).toStrictEqual(200);
    });
});