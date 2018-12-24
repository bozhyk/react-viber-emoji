# react-viber-emoji
This repository contains a script that generates an emojie image based on a Viber emojie code, like "(smiley)".
Finally get them on your server and start building your own web apps using easy to install ready-to-use library.

## Features:
- renders Viber emojies out of the box;
- latest list of emojies is included;
- easy to use or fork;
- simple functional API;
- emojie images are Viber native;

## Usage:
```
import emoji from 'react-viber-emoji'

class Page extends React.Component {
    render () {
        return <p>{ emoji('Emojis make me (smiley)') }</p>
    }
}
```

<img src="docs/screenshot0.png" width="500">