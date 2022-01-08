const fs = require('fs');
var _ = require('lodash');
const { letterPossibilies } = require('./constants.js');


module.exports = {
    getCharsForDigit: (digit) => {
        return letterPossibilies[_.toNumber(digit)];
    },
    
    convertNumberToWords: (digits) => {
        let options = [];
    
        for (let i = 0; i < digits.length; i++) {
            // convert digit to letter options
            const letterOptions = module.exports.getCharsForDigit(digits[i]);
    
            // if no previous options, just add these to the list
            if (options.length === 0) {
                options.push(...letterOptions);
            }
            else {
                // otherwise 
                const newOptions = [];
                for (var letter in letterOptions) {
                    const optionsForLetter = _.map(options, (option) => (option += letterOptions[letter]));
                    newOptions.push(...optionsForLetter)
                }
                options = newOptions;
            }
            
        }
        return options;
    },
    
    getPossibleWords: (numberToConvert) => {
        const digits = _.split(numberToConvert, "");
    
        const letterOptions = module.exports.convertNumberToWords(digits);
    
        return letterOptions;
    }
}


