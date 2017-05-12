var express = require('express'),
    path = require('path'),
    app = require('express')();
    http = require('http').Server(app),
    httpPort = 8080;

httpServerFunction();
//send file request
   function httpServerFunction(){
        app.use('/', express.static((path.join(__dirname,'../dist'))));
        app.use('/event', express.static((path.join(__dirname,'../dist'))));
        http.listen(httpPort, function(){
            console.log('listening on:' + httpPort);
            // mongoGet()
        });
    };