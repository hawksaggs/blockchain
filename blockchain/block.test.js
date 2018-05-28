const Block = require('./block');

describe('Block', () => {
    let lastBlock, block, data;
    beforeEach(() => {
        data = 'foo';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });
    it('set the `data` and check for data', () => {
        expect(block.data).toEqual(data);
    });

    it('set the `lastHash` and check with hash of next block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});