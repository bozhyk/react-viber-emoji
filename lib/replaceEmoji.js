var replaceStringToArray = require('string-replace-to-array')

var re = /\(([\w!@#$%^&*-=+`~{}?,]+)\)/gi;


module.exports = function replaceEmoji (string, render) {
	// Note: the latest regex added an empty matching group, so we ignore it.
	return replaceStringToArray(string, re, function emojiReplacer (match, _, offset) {
		return render(_, match, offset);
	})
}
