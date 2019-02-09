# Avityam
A secured micro webserver based on HTTPS over local machine

### Development
```
$ git clone https://github.com/isurfer21/Avityam.git
```

### Setup
```
$ npm install -g avityam
```

### Usage
```
$ node avityam.js -h
Avityam webserver (Version 1.0)
Copyright (c) 2019 Abhishek Kumar.
Licensed under the MIT License.

Options:
  -h, --help               display help information
  -u, --host[=127.0.0.1]   set host IP or server address
  -p, --port[=8080]        set custom port number
  -d, --docpath            set document directory's path
  -k, --key                set SSL key's path
  -c, --cert               set SSL certificate's path
	
```

#### Examples
To specifiy custom host IP and port
```bash
$ node avityam.js -u=192.168.0.1 -p=9000
```
To specifiy custom host IP, port and docpath
```bash
$ node avityam.js -d=/Users/abhishekkumar/webapp/ -u=192.168.0.1 -p=9000
```
To specifiy custom docpath and SSL certificate with key
```bash
$ node avityam.js \
 -d=/Users/abhishekkumar/webapp/ \
 -k=/Users/abhishekkumar/mkcert/rootCA-key.pem \
 -c=/Users/abhishekkumar/mkcert/rootCA.pem
```

##### Note
If you have installed the app using *npm*, then you can straight forward use `avityam` instead of `node avityam.js` in the above examples over command-line app or terminal.


### Dependency
You can use [mkcert](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates.

