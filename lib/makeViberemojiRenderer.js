var React = require('react'),
	assign = require('lodash.assign')

var emojiStyle = {
	height: '3em',
	width: '3em',
	margin: '0 .05em 0 .1em',
	verticalAlign: '-0.1em'
}

module.exports = function makeViberEmojiRenderer(options) {
    
	options = assign({}, {
		protocol: pageProtocol,
		size: '72x72',
		ext: '.png',
		props: null
	}, options)

	return function renderViberEmoji (fileName, match, offset) {
		// TODO: create correct src here
        var src = null;

		return React.createElement(
			'img',
			assign({
				key: offset,
				alt: fileName,
				draggable: false,
				src: src,
				style: emojiStyle
			}, options.props)
		)

		
	}
}
