var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


var outfile = "hello.txt", out;
var infile = "index.html";

app.get('/', function(request, response) {
  /*response.send('Hello World!');
  out = findPrimeNumbers(545);
  fs.writeFileSync(outfile, out);  
  response.send(out);
  console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);*/
  data = fs.readFileSync(infile); 
  response.send(data.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


function markArray(numbersArr, p, limit) {
  var multiple = 2,
    val = p * multiple;

  while(val < limit) {
    numbersArr[val] = 1;
    multiple = multiple + 1;
    val = p * multiple;
  }


  for (p = p + 1; p < limit; p = p + 1) {
    if (numbersArr[p] === 0) {
      break;
    }
  }
  return p;
}

function findPrimeNumbers(limit) {
  /* Using Sieve of Eratosthenes algorithm to find prime numbers */
  var numbersArr = [1,1,0],
    i = 3,
    p = 2,
    multiple = 2,
    val = p * multiple,
    result = '2',
    count;
  for (var i = 3; i < limit; i = i + 1) { 
    numbersArr.push(0); 
  }

  while (p < limit) {
    p = markArray(numbersArr, p, limit);
  }

  for (i = 3, count = 1; i < limit && count < 100; i = i + 1) {
    if (numbersArr[i] === 0) {
      result = result + ',' + i;
      count = count + 1;
    }
  }

  return result;
}



