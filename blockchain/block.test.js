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

    it('generate hash that matches difficulity', () => {
        expect(block.hash.substring(0, block.difficulity)).toEqual('0'.repeat(block.difficulity));
    })

    it('lower difficulity for quickly generated block', () => {
        expect(Block.adjustDifficulity(block, block.timestamp + 360000)).toEqual(block.difficulity - 1);
    });

    it('raises difficulity for slowly generated block', () => {
        expect(Block.adjustDifficulity(block, block.timestamp + 1)).toEqual(block.difficulity + 1);
    });
});