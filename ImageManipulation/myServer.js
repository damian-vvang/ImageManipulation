var express = require( 'express' )
var serveStatic = require( 'serve-static' )
var path = require( 'path' );
var app = express();

app.use( serveStatic( path.join( __dirname, 'html' ) ) );

app.use( serveStatic( path.join( __dirname, 'css' ) ) );

app.use( serveStatic( path.join( __dirname, 'js' ) ) );

app.use( serveStatic( path.join( __dirname, 'img' ) ) );

app.listen( 8080 )

console.log( "I think, it's OK" );
