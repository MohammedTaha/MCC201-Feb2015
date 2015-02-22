/**
 * Created by MTA on 2/22/2015.
 */


var fs = require("fs");

// Sync code

var fileMaterial =  fs.readFileSync("./foo.txt", "utf8");
console.log(fileMaterial);

//async code
fs.readFile("./foo.html", "utf8", function(e, fileData){
    if(e){
        console.log("Error in reading file");
        console.log(e);
    } else {
        console.log("File Data : " + fileData);
    }
});

console.log("After Read file");










