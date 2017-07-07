# Server-wrapper
Very simple wrapper for CLI applications with a web interface (mainly intended for server software).

![Screenshot](https://raw.githubusercontent.com/LiljebergXYZ/server-wrapper/master/screenshot.png)

## Configuration
Example config.js:
```js
module.exports = {
	cmd: 'java',
	args: [
		'-Xmx1024M', 
		'-Xms1024M',
		'-jar',
		'minecraft_server.1.12.jar',
		'nogui'
	],
	cwd: './minecraft/',
	port: 3000
}
```

## Run it
```
git clone https://github.com/LiljebergXYZ/server-wrapper.git
npm install
npm start
```