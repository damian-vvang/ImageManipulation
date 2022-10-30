var myWidth = 256;
var myHeight = 256;
var myImage, myColor;
var myCanvas1, myCanvas2, myCanvas3, myCanvas4, myCanvas5, myCanvas6;
var myContext1, myContext2, myContext3, myContext4, myContext5, myContext6;

var dAngle = Math.PI / 180;
var myVarFlip, myVarRotation;

function updateCanvas() {
    myCanvas1 = document.getElementById( 'myCanvas1' );
    myContext1 = myCanvas1.getContext( '2d' );

    myCanvas2 = document.getElementById( 'myCanvas2' );
    myContext2 = myCanvas2.getContext( '2d' );

    myCanvas3 = document.getElementById( 'myCanvas3' );
    myContext3 = myCanvas3.getContext( '2d' );

    myCanvas4 = document.getElementById( 'myCanvas4' );
    myContext4 = myCanvas4.getContext( '2d' );

    myCanvas5 = document.getElementById( 'myCanvas5' );
    myContext5 = myCanvas5.getContext( '2d' );

    myCanvas6 = document.getElementById( 'myCanvas6' );
	myContext6 = myCanvas6.getContext('2d');

    myImage = new Image();
    myImage.src = 'lena256.png';

    myContext1.fillStyle = "red";
    myContext1.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
}

function setBitmap() 
{
    switch( document.getElementById( "setBitmap" ).selectedIndex ) 
    { 
        case 0 :
			myImage.src = 'lena256.png';
            break;
        case 1 :
            myImage.src = 'lena256.png';
            break;
        case 2 :
			myImage.src = 'airplane256.png';
            break;
        case 3 :
            myImage.src = 'cicada256.png';
            break;
        case 4 :
            myImage.src = 'mandrill256.png';
            break;
        case 5 :
            myImage.src = 'monkey256.png';
            break;
        case 6 :
            myImage.src = 'parrots256.png';
            break;
        case 7 :
            myImage.src = 'tire256.png';
            break;
        case 8 :
            myImage.src = 'black_rectangles256.png';
            break;
        case 9 :
            myImage.src = 'cross_board256.png';
            break;
        case 10 :
            myImage.src = 'five_rectangles256.png';
            break;
        case 11 :
            myImage.src = 'for_histogram256.png';
            break;
        case 12 :
            myImage.src = 'grid256.png';
            break;
        case 13 :
            myImage.src = 'lena_distortions256.png';
            break;
    }
    myImage.onload = function()
    {
        myCanvas1.width = myImage.width;
        myCanvas1.height = myImage.height;
        myContext1.drawImage( myImage, 0, 0, myImage.width, myImage.height );
    }
}

function doOpenPhotos() 
{
    openImage( myContext1, 'lena256.png' );
    openImage( myContext2, 'airplane256.png' );
    openImage( myContext3, 'mandrill256.png' );
    openImage( myContext4, 'parrots256.png' );
    openImage( myContext5, 'cicada256.png' );
    openImage( myContext6, 'monkey256.png' );
}

function doOpenIndustrial() 
{
    openImage( myContext1, 'tire256.png' );
    openImage( myContext2, 'black_rectangles256.png' );
    openImage( myContext3, 'cross_board256.png' );
    openImage( myContext4, 'five_rectangles256.png' );
    openImage( myContext5, 'for_histogram256.png' );
    openImage( myContext6, 'grid256.png' );
}

function openImage( myContext, fileName) {
    var myImage = new Image();
    myImage.src = fileName;
    myImage.onload = function()
    {
        myContext.drawImage( myImage, 0, 0 );
    }
}

function doMargins() {
    if( myCanvas1.style.margin === '4px' ? myCanvas1.style.margin = '-4px' : myCanvas1.style.margin = '4px' );
    if( myCanvas2.style.margin === '4px' ? myCanvas2.style.margin = '-4px' : myCanvas2.style.margin = '4px' );
    if( myCanvas3.style.margin === '4px' ? myCanvas3.style.margin = '-4px' : myCanvas3.style.margin = '4px' );
    if( myCanvas4.style.margin === '4px' ? myCanvas4.style.margin = '-4px' : myCanvas4.style.margin = '4px' );
    if( myCanvas5.style.margin === '4px' ? myCanvas5.style.margin = '-4px' : myCanvas5.style.margin = '4px' );
    if( myCanvas6.style.margin === '4px' ? myCanvas6.style.margin = '-4px' : myCanvas6.style.margin = '4px' );
}

function doClone() {
    var myImageData1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height ); 
    myContext2.putImageData( myImageData1, 0, 0 ); 
    myContext3.putImageData( myImageData1, 0, 0 ); 
    myContext4.putImageData( myImageData1, 0, 0 ); 
    myContext5.putImageData( myImageData1, 0, 0 ); 
    myContext6.putImageData( myImageData1, 0, 0 ); 
}

function doMoveZ() {
    var myImageData1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height ); 
    myContext1.putImageData( myContext6.getImageData( 0, 0, myCanvas6.width, myCanvas6.height ), 0, 0 );
    myContext6.putImageData( myContext5.getImageData( 0, 0, myCanvas5.width, myCanvas5.height ), 0, 0 );
    myContext5.putImageData( myContext4.getImageData( 0, 0, myCanvas4.width, myCanvas4.height ), 0, 0 );
    myContext4.putImageData( myContext3.getImageData( 0, 0, myCanvas3.width, myCanvas3.height ), 0, 0 );
    myContext3.putImageData( myContext2.getImageData( 0, 0, myCanvas2.width, myCanvas2.height ), 0, 0 );
    myContext2.putImageData( myImageData1, 0, 0 ); 
}

function doMoveO() {
    var myImageData1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height ); 
    myContext1.putImageData( myContext4.getImageData( 0, 0, myCanvas6.width, myCanvas6.height ), 0, 0 );
    myContext4.putImageData( myContext5.getImageData( 0, 0, myCanvas5.width, myCanvas5.height ), 0, 0 );
    myContext5.putImageData( myContext6.getImageData( 0, 0, myCanvas4.width, myCanvas4.height ), 0, 0 );
    myContext6.putImageData( myContext3.getImageData( 0, 0, myCanvas3.width, myCanvas3.height ), 0, 0 );
    myContext3.putImageData( myContext2.getImageData( 0, 0, myCanvas2.width, myCanvas2.height ), 0, 0 );
    myContext2.putImageData( myImageData1, 0, 0 ); 
}

function doColors() {
    myContext1.fillStyle = "red";
    myContext1.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext2.fillStyle = "green";
    myContext2.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext3.fillStyle = "blue";
    myContext3.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext4.fillStyle = "cyan";
    myContext4.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext5.fillStyle = "magenta";
    myContext5.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext6.fillStyle = "yellow";
    myContext6.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
}

function doFlipAnimation() {
    if ( myVarFlip === undefined ) {
        var makeAnimation = function() {
            myContext2.translate( myImage.width - 1, myImage.height - 1 );
            myContext2.rotate( Math.PI);
            myContext2.drawImage( myImage, 0, 0, myImage.width, myImage.height );
            myVarFlip = setTimeout( makeAnimation, 500 );
        }
        myVarFlip = setTimeout( makeAnimation, 500 );
    }
    else myVarFlip = clearTimeout( myVarFlip );
}

function doRotationAnimation() {
    if ( myVarRotation === undefined ) {
        var makeAnimation = function() {
            myContext2.fillStyle = "#CCCCCC";
            myContext2.fillRect( 0, 0, myCanvas2.width, myCanvas2.height );

            myContext2.translate( myImage.width / 2, myImage.height / 2 );
            myContext2.rotate( dAngle );
            myContext2.translate( -myImage.width / 2, -myImage.height / 2 );
            myContext2.drawImage( myImage, 0, 0, myImage.width, myImage.height );
            myVarRotation = setTimeout( makeAnimation, 200 );
        }
        myVarRotation = setTimeout( makeAnimation, 200 );
    }
    else myVarRotation = clearTimeout( myVarRotation );
}

function doNoise() {
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            var r = Math.floor( Math.random() * 256 ); 
            var g = Math.floor( Math.random() * 256 ); 
            var b = Math.floor( Math.random() * 256 ); 
            var gray = Math.floor( ( r + g + b ) / 3 );
            myContext1.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext1.fillRect( xe, ye, 1, 1 );
            myContext2.fillStyle = "rgba(" + gray + "," + gray + "," + gray + "," + 1 + ")";
            myContext2.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doTest4Histogram1() {
    var n, x, y, r, g, b;
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            n = ( xe * myWidth + ye ) % 256; 
            x = xe; 
            y = ye;

            r = n; g = x, b = y;
            myContext1.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext1.fillRect( xe, ye, 1, 1 );

            r = n; g = y, b = x;
            myContext2.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext2.fillRect( xe, ye, 1, 1 );

            r = x; g = n, b = y;
            myContext3.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext3.fillRect( xe, ye, 1, 1 );

            r = y; g = n, b = x;
            myContext4.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext4.fillRect( xe, ye, 1, 1 );

            r = x; g = y, b = n;
            myContext5.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext5.fillRect( xe, ye, 1, 1 );

            r = y; g = x, b = n;
            myContext6.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext6.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doTest4Histogram2() {
    var i;

    var myImageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myData = myImageData.data;

    for ( i = 0; i < myData.length; i += 4 ) 
    {
        myData[ i ]     = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / myWidth ) ) % 256;
        myData[ i + 1 ] = Math.floor( i / 4 ) % 256;
        myData[ i + 2 ] = Math.floor( Math.floor( i / 4 ) / myWidth );
    }
    myContext1.putImageData( myImageData, 0, 0 );


    for ( i = 0; i < myData.length; i += 4 ) 
    {
        myData[ i ]     = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / myWidth ) ) % 256;
        myData[ i + 1 ] = Math.floor( Math.floor( i / 4 ) / myWidth );
        myData[ i + 2 ] = Math.floor( i / 4 ) % 256;
    }
    myContext2.putImageData( myImageData, 0, 0 );


    for ( i = 0; i < myData.length; i += 4 ) 
    {
        myData[ i ]     = Math.floor( i / 4 ) % 256;
        myData[ i + 1 ] = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / myWidth ) ) % 256;
        myData[ i + 2 ] = Math.floor( Math.floor( i / 4 ) / myWidth );
    }
    myContext3.putImageData( myImageData, 0, 0 );


    for ( i = 0; i < myData.length; i += 4 ) 
    {
        myData[ i ]     = Math.floor( Math.floor( i / 4 ) / myWidth );
        myData[ i + 1 ] = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / myWidth ) ) % 256;
        myData[ i + 2 ] = Math.floor( i / 4 ) % myWidth;
    }
    myContext4.putImageData( myImageData, 0, 0 );


    for ( i = 0; i < myData.length; i += 4) 
    {
        myData[ i ]     = Math.floor( i / 4 ) % myWidth;
        myData[ i + 1 ] = Math.floor( Math.floor( i / 4 ) / myWidth );
        myData[ i + 2 ] = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / 256 ) ) % 256;
    }
    myContext5.putImageData( myImageData, 0, 0 );


    for ( i = 0; i < myData.length; i += 4) 
    {
        myData[ i ]     = Math.floor( Math.floor( i / 4 ) / myWidth );
        myData[ i + 1 ] = Math.floor( i / 4 ) % myWidth;
        myData[ i + 2 ] = ( Math.floor( i / 4 ) % myWidth * myWidth + Math.floor( Math.floor( i / 4 ) / 256 ) ) % 256;
    }
    myContext6.putImageData( myImageData, 0, 0 );
}

function doTest1() {
    test1( myContext1, 0 );
    test1( myContext2, 51 );
    test1( myContext3, 102 );
    test1( myContext4, 153 );
    test1( myContext5, 204 );
    test1( myContext6, 255 );
}

function test1( myContext, r ) {
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            g = xe; 
            b = ye;

            myContext.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext.fillRect( xe, ye, 1, 1 );
        }
    }
}
function doTest2() {
    test2( myContext1, 0 );
    test2( myContext2, 51 );
    test2( myContext3, 102 );
    test2( myContext4, 153 );
    test2( myContext5, 204 );
    test2( myContext6, 255 );
}

function test2( myContext, g ) {
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            r = xe; 
            b = ye;

            myContext.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doTest3() {
    test3( myContext1, 0 );
    test3( myContext2, 51 );
    test3( myContext3, 102 );
    test3( myContext4, 153 );
    test3( myContext5, 204 );
    test3( myContext6, 255 );
}

function test3( myContext, b ) {
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            r = xe; 
            g = ye;

            myContext.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            myContext.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doGrid1() {
    var myImageData = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    var myData = myImageData.data;
    for ( var i = 0; i < myData.length; i += 4 )
    {
        if( ( Math.floor( i / 4 ) % myWidth ) % 2 === 0 )  // even xe...
        {
            if( Math.floor( Math.floor( i / 4 ) / myWidth ) % 2 === 0 )  // even ye...
            {
                myData[ i ] = 255; // red
                myData[ i + 1 ] = 0;
                myData[ i + 2 ] = 0;
                myData[ i + 3 ] = 255;
            }
            else  // odd ye
            {
                myData[ i ] = 0; // green
                myData[ i + 1 ] = 255;
                myData[ i + 2 ] = 0;
                myData[ i + 3 ] = 255;
            }
        }
        else  // odd xe
        {
            if( Math.floor( Math.floor( i / 4 ) / myWidth ) % 2 === 0 )  // even ye...
            {
                myData[ i ] = 0; // blue
                myData[ i + 1 ] = 0;
                myData[ i + 2 ] = 255;
                myData[ i + 3 ] = 255;
            }
            else  // odd ye
            {
                myData[ i ] = 255; // yellow
                myData[ i + 1 ] = 255;
                myData[ i + 2 ] = 0;
                myData[ i + 3 ] = 255;
            }
        }
    }
    myContext1.putImageData( myImageData, 0, 0 );
}

function doGrid2() {
    for ( var xe = 0; xe < myWidth; xe ++ )
    {
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            myContext1.fillStyle = ( ye % 2 === 0 ? ( xe % 2 === 0 ? '#FF0000' : '#0000FF' ) : ( xe % 2 === 0 ? '#00FF00' : '#FFFF00' ) );
            myContext1.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doRotation1() 
{
    var myImageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myImageDataPrim = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);

    for ( var xe = 0; xe < myWidth; xe ++ )
    {   
        for ( var ye = 0; ye < myHeight; ye ++ )
        {
            var pixel = myContext1.getImageData( xe, ye, 1, 1 );
            var data = pixel.data;
            var r = data[ 0 ]; 
            var g = data[ 1 ]; 
            var b = data[ 2 ]; 
            myContext2.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 1 + ")"; 
            myContext2.fillRect( 255 - ye, xe, 1, 1 );
        }
    }
}

function doRotation2() 
{
    var myImageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myImageDataPrim = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    
    var myData = myImageData.data;
    var myDataPrim = myImageDataPrim.data;
    
    for ( var i = 0; i < myData.length; i += 4 )
    { // ( x, y ) -> ( 255 - y, x )
        var xe = Math.floor( i / 4 ) % myWidth;
        var ye = Math.floor( Math.floor( i / 4 ) / myWidth );
        myDataPrim[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 ] = myData[ i ];
        myDataPrim[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 1 ] = myData[ i + 1 ];
        myDataPrim[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 2 ] = myData[ i + 2 ];
        myDataPrim[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 3 ] = myData[ i + 3 ];
    }
    myContext2.putImageData( myImageDataPrim, 0, 0 );
}
function doRandomize() {

	var imgSrc = new Array("lena256.png", "airplane256.png", "cicada256.png", "mandrill256.png", "monkey256.png", "black_rectangles256.png", "five_rectangles256.png", "for_histogram256.png", "grid256.png", "lena_distortions256.png");

	var range = imgSrc.length - 1;

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext1, imgSrc[randomize]);

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext2, imgSrc[randomize]);

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext3, imgSrc[randomize]);

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext4, imgSrc[randomize]);

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext5, imgSrc[randomize]);

	var randomize = Math.ceil(Math.random() * (imgSrc.length - 1));
	openImage(myContext6, imgSrc[randomize]);

}
function doReset() 
{
	window.open("http://localhost:8080/", "_self")
}

function doGrayscale1() {
	var myImageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
	var myData = myImageData.data;

		for (var i = 0; i < myData.length; i +=4 ) {
			var average = (myData[i] + myData[i + 1] + myData[i + 2]) / 3;
			myData[i] = average;
			myData[i + 1] = average;
			myData[i + 2] = average;
	}
	myContext1.putImageData(myImageData, 0, 0);
}

function doGrayscale4all() {
	var myImageData1 = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
	var myImageData2 = myContext2.getImageData(0, 0, myCanvas2.width, myCanvas2.height);
	var myImageData3 = myContext3.getImageData(0, 0, myCanvas3.width, myCanvas3.height);
	var myImageData4 = myContext4.getImageData(0, 0, myCanvas4.width, myCanvas4.height);
	var myImageData5 = myContext5.getImageData(0, 0, myCanvas5.width, myCanvas5.height);
	var myImageData6 = myContext6.getImageData(0, 0, myCanvas6.width, myCanvas6.height);
	var myData1 = myImageData1.data;
	var myData2 = myImageData2.data;
	var myData3 = myImageData3.data;
	var myData4 = myImageData4.data;
	var myData5 = myImageData5.data;
	var myData6 = myImageData6.data;

	for (var i = 0; i < myData1.length; i += 4) {
		var average = (myData1[i] + myData1[i + 1] + myData1[i + 2]) / 3;
		myData1[i] = average;
		myData1[i + 1] = average;
		myData1[i + 2] = average;
	}
	for (var i = 0; i < myData2.length; i += 4) {
		var average = (myData2[i] + myData2[i + 1] + myData2[i + 2]) / 3;
		myData2[i] = average;
		myData2[i + 1] = average;
		myData2[i + 2] = average;
	}
	for (var i = 0; i < myData3.length; i += 4) {
		var average = (myData3[i] + myData3[i + 1] + myData3[i + 2]) / 3;
		myData3[i] = average;
		myData3[i + 1] = average;
		myData3[i + 2] = average;
	}
	for (var i = 0; i < myData4.length; i += 4) {
		var average = (myData4[i] + myData4[i + 1] + myData4[i + 2]) / 3;
		myData4[i] = average;
		myData4[i + 1] = average;
		myData4[i + 2] = average;
	}
	for (var i = 0; i < myData5.length; i += 4) {
		var average = (myData5[i] + myData5[i + 1] + myData5[i + 2]) / 3;
		myData5[i] = average;
		myData5[i + 1] = average;
		myData5[i + 2] = average;
	}
	for (var i = 0; i < myData6.length; i += 4) {
		var average = (myData6[i] + myData6[i + 1] + myData6[i + 2]) / 3;
		myData6[i] = average;
		myData6[i + 1] = average;
		myData6[i + 2] = average;
	}
	myContext1.putImageData(myImageData1, 0, 0);
	myContext2.putImageData(myImageData2, 0, 0);
	myContext3.putImageData(myImageData3, 0, 0);
	myContext4.putImageData(myImageData4, 0, 0);
	myContext5.putImageData(myImageData5, 0, 0);
	myContext6.putImageData(myImageData6, 0, 0);
}

function doNegative1() {
	
	var myImageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
	var myData = myImageData.data;

	for (var i = 0; i < myData.length; i = i+4) {

		var r = myData[i];
		var g = myData[i + 1];
		var b = myData[i + 2];
		var a = myData[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData[i] = iR;
		myData[i + 1] = iG;
		myData[i + 2] = iB;
	}
	myContext1.putImageData(myImageData, 0, 0);
}

function doNegative4all() {

	var myImageData1 = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
	var myImageData2 = myContext2.getImageData(0, 0, myCanvas2.width, myCanvas2.height);
	var myImageData3 = myContext3.getImageData(0, 0, myCanvas3.width, myCanvas3.height);
	var myImageData4 = myContext4.getImageData(0, 0, myCanvas4.width, myCanvas4.height);
	var myImageData5 = myContext5.getImageData(0, 0, myCanvas5.width, myCanvas5.height);
	var myImageData6 = myContext6.getImageData(0, 0, myCanvas6.width, myCanvas6.height);
	var myData1 = myImageData1.data;
	var myData2 = myImageData2.data;
	var myData3 = myImageData3.data;
	var myData4 = myImageData4.data;
	var myData5 = myImageData5.data;
	var myData6 = myImageData6.data;

	for (var i = 0; i < myData1.length; i = i + 4) {

		var r = myData1[i];
		var g = myData1[i + 1];
		var b = myData1[i + 2];
		var a = myData1[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData1[i] = iR;
		myData1[i + 1] = iG;
		myData1[i + 2] = iB;
	}
	myContext1.putImageData(myImageData1, 0, 0);

	for (var i = 0; i < myData2.length; i = i + 4) {

		var r = myData2[i];
		var g = myData2[i + 1];
		var b = myData2[i + 2];
		var a = myData2[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData2[i] = iR;
		myData2[i + 1] = iG;
		myData2[i + 2] = iB;
	}
	myContext2.putImageData(myImageData2, 0, 0);

	for (var i = 0; i < myData3.length; i = i + 4) {

		var r = myData3[i];
		var g = myData3[i + 1];
		var b = myData3[i + 2];
		var a = myData3[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData3[i] = iR;
		myData3[i + 1] = iG;
		myData3[i + 2] = iB;
	}
	myContext3.putImageData(myImageData3, 0, 0);

	for (var i = 0; i < myData4.length; i = i + 4) {

		var r = myData4[i];
		var g = myData4[i + 1];
		var b = myData4[i + 2];
		var a = myData4[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData4[i] = iR;
		myData4[i + 1] = iG;
		myData4[i + 2] = iB;
	}
	myContext4.putImageData(myImageData4, 0, 0);

	for (var i = 0; i < myData5.length; i = i + 4) {

		var r = myData5[i];
		var g = myData5[i + 1];
		var b = myData5[i + 2];
		var a = myData5[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData5[i] = iR;
		myData5[i + 1] = iG;
		myData5[i + 2] = iB;
	}
	myContext5.putImageData(myImageData5, 0, 0);

	for (var i = 0; i < myData6.length; i = i + 4) {

		var r = myData6[i];
		var g = myData6[i + 1];
		var b = myData6[i + 2];
		var a = myData6[i + 3];

		var iR = 255 - r;
		var iG = 255 - g;
		var iB = 255 - b;

		myData6[i] = iR;
		myData6[i + 1] = iG;
		myData6[i + 2] = iB;
	}
	myContext6.putImageData(myImageData6, 0, 0);
}
function doBinarization1() {
	
    imageData = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);

    for (y = 0; y < myCanvas1.height; y++) {
        inpos = y * myCanvas1.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas1.width; x++) {
            r = imageData.data[inpos++]
            g = imageData.data[inpos++]
            b = imageData.data[inpos++]
            a = imageData.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            imageData.data[outpos++] = 255;
    	        imageData.data[outpos++] = 255;
        	    imageData.data[outpos++] = 255;
            	imageData.data[outpos++] = a;
			}
			else
			{
            	imageData.data[outpos++] = 0;
            	imageData.data[outpos++] = 0;
	            imageData.data[outpos++] = 0;
    	        imageData.data[outpos++] = a;
			}
        } 
    } 
	myContext1.putImageData(imageData, 0, 0);
}
function doBinarization4all() {

	var myImageData1 = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
	var myImageData2 = myContext2.getImageData(0, 0, myCanvas2.width, myCanvas2.height);
	var myImageData3 = myContext3.getImageData(0, 0, myCanvas3.width, myCanvas3.height);
	var myImageData4 = myContext4.getImageData(0, 0, myCanvas4.width, myCanvas4.height);
	var myImageData5 = myContext5.getImageData(0, 0, myCanvas5.width, myCanvas5.height);
	var myImageData6 = myContext6.getImageData(0, 0, myCanvas6.width, myCanvas6.height);

    for (y = 0; y < myCanvas1.height; y++) {
        inpos = y * myCanvas1.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas1.width; x++) {
            r = myImageData1.data[inpos++]
            g = myImageData1.data[inpos++]
            b = myImageData1.data[inpos++]
            a = myImageData1.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData1.data[outpos++] = 255;
    	        myImageData1.data[outpos++] = 255;
        	    myImageData1.data[outpos++] = 255;
            	myImageData1.data[outpos++] = a;
			}
			else
			{
            	myImageData1.data[outpos++] = 0;
            	myImageData1.data[outpos++] = 0;
	            myImageData1.data[outpos++] = 0;
    	        myImageData1.data[outpos++] = a;
			}
        } 
    } 
	myContext1.putImageData(myImageData1, 0, 0);
		
	for (y = 0; y < myCanvas2.height; y++) {
        inpos = y * myCanvas2.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas2.width; x++) {
            r = myImageData2.data[inpos++]
            g = myImageData2.data[inpos++]
            b = myImageData2.data[inpos++]
            a = myImageData2.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData2.data[outpos++] = 255;
    	        myImageData2.data[outpos++] = 255;
        	    myImageData2.data[outpos++] = 255;
            	myImageData2.data[outpos++] = a;
			}
			else
			{
            	myImageData2.data[outpos++] = 0;
            	myImageData2.data[outpos++] = 0;
	            myImageData2.data[outpos++] = 0;
    	        myImageData2.data[outpos++] = a;
			}
        } 
    } 
	myContext2.putImageData(myImageData2, 0, 0);
		
	for (y = 0; y < myCanvas3.height; y++) {
        inpos = y * myCanvas3.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas3.width; x++) {
            r = myImageData3.data[inpos++]
            g = myImageData3.data[inpos++]
            b = myImageData3.data[inpos++]
            a = myImageData3.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData3.data[outpos++] = 255;
    	        myImageData3.data[outpos++] = 255;
        	    myImageData3.data[outpos++] = 255;
            	myImageData3.data[outpos++] = a;
			}
			else
			{
            	myImageData3.data[outpos++] = 0;
            	myImageData3.data[outpos++] = 0;
	            myImageData3.data[outpos++] = 0;
    	        myImageData3.data[outpos++] = a;
			}
        } 
    } 
	myContext3.putImageData(myImageData3, 0, 0);
	
		for (y = 0; y < myCanvas4.height; y++) {
        inpos = y * myCanvas4.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas4.width; x++) {
            r = myImageData4.data[inpos++]
            g = myImageData4.data[inpos++]
            b = myImageData4.data[inpos++]
            a = myImageData4.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData4.data[outpos++] = 255;
    	        myImageData4.data[outpos++] = 255;
        	    myImageData4.data[outpos++] = 255;
            	myImageData4.data[outpos++] = a;
			}
			else
			{
            	myImageData4.data[outpos++] = 0;
            	myImageData4.data[outpos++] = 0;
	            myImageData4.data[outpos++] = 0;
    	        myImageData4.data[outpos++] = a;
			}
        } 
    } 
	myContext4.putImageData(myImageData4, 0, 0);
		
	for (y = 0; y < myCanvas5.height; y++) {
        inpos = y * myCanvas5.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas5.width; x++) {
            r = myImageData5.data[inpos++]
            g = myImageData5.data[inpos++]
            b = myImageData5.data[inpos++]
            a = myImageData5.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData5.data[outpos++] = 255;
    	        myImageData5.data[outpos++] = 255;
        	    myImageData5.data[outpos++] = 255;
            	myImageData5.data[outpos++] = a;
			}
			else
			{
            	myImageData5.data[outpos++] = 0;
            	myImageData5.data[outpos++] = 0;
	            myImageData5.data[outpos++] = 0;
    	        myImageData5.data[outpos++] = a;
			}
        } 
    } 
	myContext5.putImageData(myImageData5, 0, 0);
		
	for (y = 0; y < myCanvas6.height; y++) {
        inpos = y * myCanvas6.width * 4; 
        outpos = inpos
		
        for (x = 0; x < myCanvas6.width; x++) {
            r = myImageData6.data[inpos++]
            g = myImageData6.data[inpos++]
            b = myImageData6.data[inpos++]
            a = myImageData6.data[inpos++]

			gray =  (0.299 * r + 0.587 * g + 0.114 * b)

            if ( gray > 120 )
			{
	            myImageData6.data[outpos++] = 255;
    	        myImageData6.data[outpos++] = 255;
        	    myImageData6.data[outpos++] = 255;
            	myImageData6.data[outpos++] = a;
			}
			else
			{
            	myImageData6.data[outpos++] = 0;
            	myImageData6.data[outpos++] = 0;
	            myImageData6.data[outpos++] = 0;
    	        myImageData6.data[outpos++] = a;
			}
        } 
    } 
	myContext6.putImageData(myImageData6, 0, 0);
}