module.exports.guns = function(query) {
    const file = require(`./guns/${query}`);
    if(!file) return;

    return file;
}

module.exports.characters = function(query) {
    const file = require(`./characters/${query}`);
    if(!file) return;

    return file;
}

module.exports.rarity = function(query) {
    const file = require(`./rarity/${query}`);
    if(!file) return;

    return file;
}
