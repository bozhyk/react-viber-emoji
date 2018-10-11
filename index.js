var replaceEmoji = require('./lib/replaceEmoji'),
	makeViberEmojiRenderer = require('./lib/makeViberEmojiRenderer')

module.exports = function reactEasyEmoji (element, optionsOrFn) {
	var render = (typeof optionsOrFn === 'function') ? optionsOrFn : makeViberEmojiRenderer(optionsOrFn)
	return replaceEmoji(element, render)
}