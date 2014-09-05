//process.stdin.pipe(process.stdout)
var trumpet = require('trumpet')();
var thru = require('through');

//tr.pipe(process.stdout);
stdin = process.stdin, stdout = process.stdout;

var loud = trumpet.select('.loud').createStream();

var write = function(buffer) {
    return this.queue(buffer.toString().toUpperCase());
  };

loud.pipe(thru(write)).pipe(loud);

stdin.pipe(trumpet).pipe(stdout);






/*
  #####################################################################
  ##                       ~~  HTML STREAM  ~~                       ##
  #####################################################################

Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud".

You can use `trumpet` and `through` to solve this adventure.

With `trumpet` you can create a transform stream from a css selector:

    var trumpet = require('trumpet');
    var fs = require('fs');
    var tr = trumpet();
    fs.createReadStream('input.html').pipe(tr);

    var stream = tr.select('.beep').createStream();

Now `stream` outputs all the inner html content at `'.beep'` and the data you
write to `stream` will appear as the new inner html content.

Make sure to `npm install trumpet through` in the directory where your solution
file lives.

To verify your program, run: `stream-adventure verify program.js`.
*/

//process.stdin.pipe(tr).pipe(process.stdout);

/*
(function() {
  var loud, stdin, stdout, thru, trumpet, write;

  trumpet = require('trumpet')();

  thru = require('through');

  stdin = process.stdin, stdout = process.stdout;

  loud = trumpet.select('.loud').createStream();

  write = function(buffer) {
    return this.queue(buffer.toString().toUpperCase());
  };

  loud.pipe(thru(write)).pipe(loud);

  stdin.pipe(trumpet).pipe(stdout);

}).call(this);
*/
