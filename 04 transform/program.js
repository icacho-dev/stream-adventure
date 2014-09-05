var through = require('through')

var tr = through(function write(data) {
    this.queue(data.toString().toUpperCase()) //data *must* not be null
  },
  function end () { //optional
    this.queue(null)
  })

process.stdin.pipe(tr).pipe(process.stdout)

/*
var through = require('through');
var tr = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});
process.stdin.pipe(tr).pipe(process.stdout);
*/