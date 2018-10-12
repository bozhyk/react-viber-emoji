var replaceStringToArray = require('string-replace-to-array');
var emojiFiles = require('../assets/viber');

var re = /\(([\w!@#$%^&*-=+`~{}?,]+)\)/gi;


module.exports = function replaceEmoji (string, render) {
	// Note: the latest regex added an empty matching group, so we ignore it.
	return replaceStringToArray(string, re, function emojiReplacer (match, name, offset) {
		var fileName = emojiFiles[name] ? emojiFiles[name] : null;
		return render(fileName, match, offset);
	})
}
