var through = require('through')
var split = require('split')
var i = 0

var tr = through(function write(data) {
    this.queue(((i%2 === 0)?
    				data.toString().toLowerCase():
    				data.toString().toUpperCase()) 
    			+ '\r\n')
    i++
  },
  function end () { //optional
    this.queue(null)
  })

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout)

/*
Here's what the official solution is if you want to compare notes:

    var through = require('through');
    var split = require('split');

    var lineCount = 0;
    var tr = through(function (buf) {
        var line = buf.toString();
        this.queue(lineCount % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
        );
        lineCount ++;
    });
    process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

You have 14 challenges left.
Type `stream-adventure` to show the menu.
*/	