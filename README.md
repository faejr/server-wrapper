# Server-wrapper
Very simple wrapper for CLI applications (mainly intended for server software).

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
`npm start`