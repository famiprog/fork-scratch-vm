
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class Scratch3JavaScriptBlocks {
    getInfo() {
        return {
            id: 'javascript',
            name: 'JavaScript',
            blocks: [
                {
                    opcode: 'javascript',
                    blockType: BlockType.COMMAND,
                    text: 'JavaScript [JAVASCRIPT]',
                    arguments: {
                        JAVASCRIPT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'console.log("javascript")'
                        }
                    }
                },
            ]
        }
    }

    javascript(args) {
        // TODO DB exec the javascript 
    }
}
module.exports = Scratch3JavaScriptBlocks;