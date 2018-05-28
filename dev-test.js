const Block = require('./block');

console.log(Block.mineBlock(Block.genesis(), 'foo-data').toString());